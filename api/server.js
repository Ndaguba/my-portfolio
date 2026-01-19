const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});
