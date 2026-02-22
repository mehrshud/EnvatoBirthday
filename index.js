
const express = require('express');
const app = express();
app.use(express.json());

let birthdays = {};

app.post('/birthday', (req, res) => {
  const { name, date } = req.body;
  birthdays[name] = date;
  res.send(`Happy Birthday ${name} on ${date}!`);
});

app.get('/birthday/:name', (req, res) => {
  const name = req.params.name;
  if (birthdays[name]) {
    res.send(`Happy Birthday ${name} on ${birthdays[name]}!`);
  } else {
    res.send(`No birthday found for ${name}`);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
