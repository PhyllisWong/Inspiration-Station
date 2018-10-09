/*************************************
 * Quotes controller
 **************************************/

module.exports = function(app) {

  // const quotes = require('../json/quotes');
  const fs = require('fs');

  let quotesArray = [];
  let randomQuoteObj;

  fs.readFile('./json/quotes.json', 'utf-8', (err, data) => {
    if (err) throw err;
    quotesArray = JSON.parse(data);

  });

  app.get('/', (req, res) => {
    let int = Math.floor(Math.random() * quotesArray.length );
    // Send this to a template
    // console.log(quotesArray[int].quote) // <----- confirmed this returns a quote
    randomQuoteObj = quotesArray[int];
    console.log(randomQuoteObj);
    res.render('index', { quote: randomQuoteObj.quote, author: randomQuoteObj.author });
  });

  // Get a new quote
  // Wire this up to a button
  app.get('/quotes', (req, res)=> {
    res.json(quotesArray);
  });
};