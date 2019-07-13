const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../../build')));
console.log(path.join(__dirname, '../../build'))
app.get('/', (req, res) => {
  res.send('test');
});

module.exports = app;