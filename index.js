const express = require('express');
const pug = require('pug');
require('jstransformer-markdown-it');

const app = express();
app.use(express.static('public'));

app.get('/',  (req, res) => {
  const maxUnits = req.query.maxUnits || 60;
  const quantities = [40, 60, 80, 120];
  res.send(pug.renderFile('public/index.pug', { maxUnits, quantities })); 
});

app.listen(8080, () => {
    console.log('Server up!');
});