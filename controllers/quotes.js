/*************************************
 * Quotes controller
 **************************************/

// const quotes = require('../json/quotes');
const fs = require('fs');

fs.readFile('./json/quotes.json', 'utf-8', (err, data) => {
  if (err) throw err;
  const obj = JSON.parse(data);
  console.log(obj[0].quote)
});

module.exports = function(app) {

  app.get('/', (req, res) => {
    res.send("Hello Inspiration Station")
  });

  app.get('/quotes', (req, res)=> {
    res.json(quotes);
  });
};