// controllers/quotes.js

const express = require('express');
const app = express.Router();
// const PDK = require('node-pinterest');
// const pinterest = PDK.init(process.env.APP_SECRET);
// pinterest.api('me').then(console.log);

app.get('/', (req, res)=> {
  res.send("Hello Inspirational Quotes");
});

module.exports = app;