const express = require('express');
const pug = require('pug');
require('jstransformer-markdown-it');

const app = express();
app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.send(`
    <a href='/draw?max=10'>Draw 10</a><br>
    <a href='/draw?max=30'>Draw 30</a><br>
    <a href='/draw?max=60'>Draw 60</a><br>
    <a href='/draw?max=90'>Draw 90</a><br>
    <a href='/draw?max=120'>Draw 120</a>
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