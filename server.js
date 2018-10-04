require('dotenv').config();
const exp = require('express');
const app = exp();
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT;

const quotesController = require('./controllers/quotes');

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

// Static content
app.use(exp.static('./public'));

// Set up Template engine
app.engine('hbs', exphbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');

// ROUTES
app.use('/', quotesController);

// 404 page
// app.get('*', (req, res) => {
//   res.render('error/index.hbs');
// })

// Mongoose Connection
const mongoUri = process.env.MONGODB_URI;
mongoose.connect( mongoUri, { useNewUrlParser: true });
mongoose.set('debug', true);

app.listen(port, () => {
  console.log(`App listening on ${port}`)
});
