const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Website is healthy.");
});

app.get('/other', (req, res) => {
  res.send("Hit other route with update 2.");
});

app.get('/route3', (req, res) => {
  res.send("You hit route 3");
});

app.get('/route4', (req, res) => {
  res.send("You hit route 4");
});

const port = 6402;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
