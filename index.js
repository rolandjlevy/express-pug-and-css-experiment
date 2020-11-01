const express = require('express');
const pug = require('pug');
require('jstransformer-markdown-it');

const app = express();
app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.send(`
    <a href='/draw?max=40'>Draw 40</a><br>
    <a href='/draw?max=80'>Draw 80</a><br>
    <a href='/draw?max=120'>Draw 120</a><br>
  `); 
});

app.get('/draw',  (req, res) => {
  const max = req.query.max;
  console.log(max)
  res.send(pug.renderFile('public/index.pug', { max })); 
});

app.get('/draw')

app.listen(8080, () => {
    console.log('Server up!');
});