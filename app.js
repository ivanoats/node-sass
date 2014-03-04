'use strict';
// set variables for environment
var express = require('express');
var app = express();
// var path = require('path');

// handlebars for express (from README)
// https://github.com/ericf/express3-handlebars
var exphbs  = require('express3-handlebars');
app.engine('hbs', exphbs(
  {
    defaultLayout: 'main',
    // I had to add this in addtion to the express3-handlebars README
    extname: '.hbs'
  }
));
//app.set('view engine', 'handlebars');
app.set('view engine', 'hbs');

// instruct express to serve up static assets
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home');
});

// Set server port
app.listen(3000);
console.log('server is running');
