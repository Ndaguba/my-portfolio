const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 4000;

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
