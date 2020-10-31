const express = require('express');
const pug = require('pug');
require('jstransformer-markdown-it');

const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send(pug.renderFile('public/index.pug')); 
});

app.listen(8080, function() {
    console.log('Server up!');
});