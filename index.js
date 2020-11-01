const express = require('express');
const pug = require('pug');
const app = express();
app.use(express.static('public'));

app.get('/',  (req, res) => {
  const size = req.query.size || 1;
  const degrees = req.query.degrees || 360;
  const quantities = [25, 50, 75, 100];
  const quantity = req.query.quantity || 75;
  res.send(pug.renderFile('public/index.pug', { size, degrees, quantities, quantity })); 
});

app.listen(8080, () => {
    console.log('Server up!');
});