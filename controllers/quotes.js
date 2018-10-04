// controllers/quotes.js

const express = require('express');
const app = express.Router();


app.get('/', (req, res)=> {
  res.send("Hello Inspirational Quotes");
});

module.exports = app;