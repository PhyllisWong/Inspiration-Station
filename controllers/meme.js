/*************************************
 * Memes Controller
 **************************************/

module.exports = function(app) {
  const fs = require('fs');
  const MemeSchema = require('../models/meme');

  let quotesArray = [];
  let imagesArray = [];
  let randomImgObj;
  let randomQuoteObj;

  // read the quotes from json file
  fs.readFile('./json/quotes.json', 'utf-8', (err, data) => {
    if (err) throw err;
    quotesArray = JSON.parse(data);
  });

  // read the images from json file
  fs.readFile('./json/images.json', 'utf-8', (err, data) => {
    if (err) throw err;
    imagesArray = JSON.parse(data);
  });

  // serve up quote with image
  app.get('/', (req, res) => {
    const imgInt = getRandomImgInt();
    const quoteInt = getRandomQuoteInt();
    randomImgObj = imagesArray[imgInt];
    randomQuoteObj = quotesArray[quoteInt];
    res.render('index', { image: randomImgObj.url, quote: randomQuoteObj.quote, author: randomQuoteObj.author });
  });

  // CREATE saves a meme to the database
  app.post('/meme', (req, res) => {
    MemeSchema.create(req.body).then((meme) => {
      res.redirect('/');
    }).catch((err) => {
      console.log(err.message);
    })
  });

  // SHOW: Show one meme
  app.get('/meme/:id', (req, res) => {
    MemeSchema.findById(req.params.id)
      .then((meme) => {
        res.render('/'); // Always show a new meme
      })
  });

  // randomize the image and quote with these ints
  function getRandomQuoteInt() {
    return int = Math.floor(Math.random() * quotesArray.length );
  }

  function getRandomImgInt() {
    return int = Math.floor(Math.random() * imagesArray.length );
  }

  // Get a new MEME
  app.get('/meme-new', (req, res)=> {
    const imgInt = getRandomImgInt();
    const quoteInt = getRandomQuoteInt();
    randomImgObj = imagesArray[imgInt];
    randomQuoteObj = quotesArray[quoteInt];
    res.render('index', { image: randomImgObj.url, quote: randomQuoteObj.quote, author: randomQuoteObj.author });
  });

  // Get a new QUOTE
  app.get('/quote-new', (req, res)=> {
    const quoteInt = getRandomQuoteInt();
    randomQuoteObj = quotesArray[quoteInt];
    res.render('index', { image: randomImgObj.url, quote: randomQuoteObj.quote, author: randomQuoteObj.author });
  });

  // Get a new IMAGE
  app.get('/image-new', (req, res)=> {
    const imgInt = getRandomImgInt();
    randomImgObj = imagesArray[imgInt];
    res.render('index', { image: randomImgObj.url, quote: randomQuoteObj.quote, author: randomQuoteObj.author });
  });
};
