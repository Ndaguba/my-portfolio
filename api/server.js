require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const { OpenAI } = require('openai');
const dataContext = require('./context');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages) {
      return res.status(400).json({ error: 'Messages are required' });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

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
