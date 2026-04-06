import express from 'express';

const app = express();
const port = 3333;

app.get('/', (req, res) => {
  res.send('IS THIS WORKING');
});

app.listen(port, (error) => {
  if (error) {
    throw error;
  }

  console.log(`SERVER/${port}`);
});
