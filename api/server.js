require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const { OpenAI } = require('openai');
const dataContext = require('./context');

const { createClient } = require('@supabase/supabase-js');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Get Feature Flags
app.get('/api/flags', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('feature_flags')
      .select('key, value');

    if (error) {
      console.error('Supabase error fetching flags:', error);
      throw error;
    }

    if (!data || data.length === 0) {
      console.warn('No feature flags found in table. Using defaults.');
    }

    // Convert array of {key, value} to object { [key]: value }
    const flags = data.reduce((acc, flag) => {
      acc[flag.key] = flag.value;
      return acc;
    }, {});

    console.log('Backend flags retrieved:', flags);
    res.json(flags);
  } catch (error) {
    console.error('Fetch flags error:', error);
    // Fallback to defaults if table doesn't exist or error occurs
    res.json({
      ai_features_enabled: true,
      engineering_tab_enabled: false,
      product_design_only: true
    });
  }
});

// Summarize Case Study
app.post('/api/summarize', async (req, res) => {
  const { pageId } = req.body;
  if (!pageId) return res.status(400).json({ error: 'pageId is required' });

  try {
    // 1. Check Cache in Supabase
    const { data: cachedFile, error: fetchError } = await supabase.storage
      .from('summaries')
      .download(`${pageId}.txt`);

    if (cachedFile) {
      const summary = await cachedFile.text();
      return res.json({ summary });
    }

    // 2. Generate Summary if not cached
    const project = dataContext.projects.find(p => p.id === pageId);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a professional design critic. Summarize the following case study into a concise, impact-driven summary using markdown. Use bullet points for key highlights.' },
        { role: 'user', content: JSON.stringify(project) }
      ],
      max_tokens: 500
    });

    const summary = completion.choices[0].message.content;

    // 3. Cache in Supabase
    await supabase.storage
      .from('summaries')
      .upload(`${pageId}.txt`, summary, { upsert: true });

    res.json({ summary });
  } catch (error) {
    console.error('Summarize error:', error);
    res.status(500).json({ error: 'Failed to generate summary' });
  }
});

// Generate Audio Podcast
app.post('/api/audio', async (req, res) => {
  const { pageId } = req.body;
  if (!pageId) return res.status(400).json({ error: 'pageId is required' });

  try {
    const fileName = `${pageId}.mp3`;
    
    // 1. Check if audio already exists
    const { data: publicUrlData } = supabase.storage
      .from('audio')
      .getPublicUrl(fileName);

    // Check if file actually exists by trying to get its metadata
    const { data: fileData, error: metaError } = await supabase.storage
      .from('audio')
      .list('', { search: fileName });

    if (fileData && fileData.length > 0) {
      return res.json({ audioUrl: publicUrlData.publicUrl });
    }

    // 2. Generate Podcast Script
    const project = dataContext.projects.find(p => p.id === pageId);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    const scriptCompletion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: `Generate a short, high-energy podcast script (2-3 minutes) between two hosts, Alex and Sam, reviewing Emeka's case study: ${project.title}. 
        Alex is design-focused, Sam is technical. 
        Focus on the narrative: The problem (${project.problem}), the solution (${project.solution}), and the impact (${project.impact.join(', ')}). 
        Make it sound like a "Project Deep Dive" episode. 
        IMPORTANT: Do not describe specific images, focus on the concepts and results. 
        Output ONLY the script text, no host names or stage directions.` },
        { role: 'user', content: JSON.stringify(project) }
      ],
      max_tokens: 1000
    });

    const scriptText = scriptCompletion.choices[0].message.content;

    // 3. Generate Audio using Hume AI
    const humeResponse = await axios.post(
      'https://api.hume.ai/v0/tts/file',
      {
        text: scriptText,
        voice: {
          provider: 'HUME',
          name: 'DAWSON' // A professional podcast-style voice
        },
        format: 'mp3'
      },
      {
        headers: {
          'X-Hume-Api-Key': process.env.HUME_API_KEY,
          'Content-Type': 'application/json'
        },
        responseType: 'arraybuffer'
      }
    );

    // 4. Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('audio')
      .upload(fileName, humeResponse.data, {
        contentType: 'audio/mpeg',
        upsert: true
      });

    if (uploadError) throw uploadError;

    const { data: finalUrl } = supabase.storage
      .from('audio')
      .getPublicUrl(fileName);

    res.json({ audioUrl: finalUrl.publicUrl });
  } catch (error) {
    console.error('Audio generation error:', error);
    res.status(500).json({ error: 'Failed to generate audio' });
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages) {
      return res.status(400).json({ error: 'Messages are required' });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no'); // Disable Nginx buffering
    res.setHeader('X-Content-Type-Options', 'nosniff');

    const systemPrompt = `
You are Emeka Ndaguba, a Senior Design Engineer and Product Designer based in ${dataContext.profile.location}. 
Your background: ${dataContext.profile.summary}

Your Philosophy: ${dataContext.profile.philosophy}

Your Experience:
${dataContext.experience.map(exp => `- ${exp.company} (${exp.role}, ${exp.period}): ${exp.description}`).join('\n')}

Your Major Projects:
${dataContext.projects.map(p => `### ${p.title} (${p.tagline})
- Problem: ${p.problem}
- Solution: ${p.solution}
- Key Decisions: ${p.decisions.join(', ')}
- Impact: ${p.impact.join(', ')}`).join('\n\n')}

Your Skills:
- Design: ${dataContext.skills.design.join(', ')}
- Engineering: ${dataContext.skills.engineering.join(', ')}
- Tools: ${dataContext.skills.tools.join(', ')}

Your Process:
- Discovery: ${dataContext.process.discovery}
- Strategy: ${dataContext.process.strategy}
- Execution: ${dataContext.process.execution}
- Validation: ${dataContext.process.validation}

Instructions for responding:
1. Speak as Emeka. Use "I", "me", "my". 
2. Be professional, helpful, and insightful. 
3. When asked about your background, experience, or process, draw from the specific details above.
4. If asked about projects, mention specific examples like Poppy AI or the Skip x WestJet partnership.
5. Keep responses concise but impact-driven.
6. If asked about something not in your context, respond politely based on your persona as a design-minded engineer.
`;

    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
      max_tokens: 500,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
        if (res.flush) res.flush(); // Flush the response buffer
      }
    }
    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API' });
});

// Serve frontend static files if present. Prefer `app/build` (production),
// otherwise fall back to `app/public` for a simple static serve during development.
const buildPath = path.join(__dirname, '..', 'app', 'build');
const publicPath = path.join(__dirname, '..', 'app', 'public');

if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
} else if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
  app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
}

// 404 for API routes that weren't handled
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

// Fallback for other unknown routes (if no frontend served)
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});
