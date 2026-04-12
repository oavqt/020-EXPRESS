import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pages = path.join(__dirname, '..', 'public', 'pages');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(pages, '..', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(pages, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(pages, 'contact.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(pages, 'error.html'));
});

const port = 3333;
const server = app.listen(port, () => {
  console.log(`SERVER/${port}`);
});

server.on('error', (error) => {
  console.error(`THIS IS NOT WORKING/${error.message}`);
  process.exit(3);
});
