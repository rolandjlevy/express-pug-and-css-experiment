const express = require('express');
const pug = require('pug');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const quantities = [25, 50, 75, 100];
const initialColour = '#4788ff';

app.get('/',  (req, res) => {
  const size = req.query.size || 1;
  const degrees = req.query.degrees || 360;
  const quantity = req.query.quantity || 50;
  const col = req.query.col || initialColour;
  const params = { size, degrees, quantities, quantity, col: decodeURIComponent(col) }
  res.render('index.pug', params); 
  // res.send(pug.renderFile('public/static.pug', params)); 
});

app.listen(port, () => {
  console.log('Listening on port', port);
});