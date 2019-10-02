const express = require('express');

const app = express();

//arrow functions
app.get('/users', (req, res) => {

  return res.json({ idade: req.query.idade });
  
});

app.listen(3333);