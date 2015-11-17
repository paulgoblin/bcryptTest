'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost/userauth';
var mongoose = require('mongoose');
mongoose.connect(mongoUrl)
//   , function(err){
//   if (err) return console.log('Error connecting to Mongodb: ', err)
//   console.log('connected to mongodb', mongoUrl)
// });


var app = express();

app.set('view engine', 'jade');

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(express.static('public'));

// ROUTES
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// 404 HANDLER
app.use(function(req, res){
  res.status(404).render('404')
})

app.listen(PORT, function(){
  console.log('Listening on port ', PORT);
});
