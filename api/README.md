# api

This directory contains a minimal Express API scaffold.

Files added:
- `package.json` — metadata and start scripts
- `server.js` — example Express server with a `/api/hello` route
- `.gitignore` — ignores `node_modules` and `.env`

To run locally:

```bash
cd api
npm install
npm start
```

The server listens on `PORT` (default 4000). Example request:

```bash
curl http://localhost:4000/api/hello
```