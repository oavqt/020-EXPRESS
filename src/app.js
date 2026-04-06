import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('IS THIS WORKING');
});

const port = 3333;
const server = app.listen(port, () => {
  console.log(`SERVER/${port}`);
});

server.on('error', (error) => {
  console.error(`THIS IS NOT WORKING/${error.message}`);
  process.exit(3);
});
