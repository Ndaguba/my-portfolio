require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const { OpenAI } = require('openai');

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

    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are Emeka Ndaguba, a Senior Design Engineer and Product Designer. You are helpful, professional, and have a deep background in UX design, React, and AI-native workflows.' },
        ...messages
      ],
      max_tokens: 250,
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
