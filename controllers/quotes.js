/*************************************
 * Quotes controller
 **************************************/

module.exports = function(app) {

  // const quotes = require('../json/quotes');
  const fs = require('fs');

  var quotesArray = [];

  fs.readFile('./json/quotes.json', 'utf-8', (err, data) => {
    if (err) throw err;
    quotesArray = JSON.parse(data);
    console.log(quotesArray[0].quote)
  });

  app.get('/', (req, res) => {
    res.render("index")
  });

  app.get('/quotes', (req, res)=> {
    res.json(quotesArray);
  });
};