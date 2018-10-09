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
    let int = Math.floor(Math.random() * quotesArray.length );
    // Send this to a template
    console.log(quotesArray[int].quote) // <----- confirmed this returns a quote
  });

  app.get('/', (req, res) => {
    res.render("index")
  });

  app.get('/quotes', (req, res)=> {
    res.json(quotesArray);
  });
};