var express = require('express');
var pug = require('pug');
var path = require('path');
var data = require('./data/data');
var bp = require('body-parser');
var fs = require('fs');
var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));
var urlencodedparser = bp.urlencoded({ extended: false });

app.get('/', function (req, res) {
   res.render('home', {
       "title": "Home",
       "config": data
   });
});

app.get('/order', function (req, res) {
   res.render('orders', {
       "title": "Home",
       "config": data
   });
});

app.get('/services', function (req, res) {
   res.render('services', {
       "title": "Home",
       "config": data
   });
});

app.post('/submitted', urlencodedparser, function(req, res){
   res.render('submitted', {
      isChecked: ""
   })
});

// fs.writeFile('public/Pug.html', 'Data to render'); -> writing a file to a folder
//                                                          and to

// Array.join(); -> allows for all elements of an array to be combined into a string

app.listen(3000);