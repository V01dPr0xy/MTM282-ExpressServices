var express = require('express');
var pug = require('pug');
var path = require('path');
<<<<<<< HEAD
var data = require('./data/data.json');
=======
var data = require('./data/data');
var config = require("./config.json");
var caskets = require("./casketsItem.json");
var cardgames = require("./cardgamesItem.json");
var wifi = require("./wifiItem.json");
>>>>>>> a6bc618d914ab35829e8fbfad65267a5573deca5
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
       "config": config,
       "casketItem" : caskets,
        "cardgamesItem" : cardgames,
        "wifiItems" : wifi
   });
});

app.get('/order', function (req, res) {
   res.render('orders', {
<<<<<<< HEAD
       "title": "Orders",
       "config": data
   });
});

app.get('/services', function (req, res) {
    console.log(data);
   res.render('services', {
       "title": "Services",
       "config": data
=======
       "title": "Home",
       "config": config,
       "casketItem" : caskets,
        "cardgamesItem" : cardgames,
        "wifiItems" : wifi
   });
});

app.get('/services_caskets', function (req, res) {
   res.render('caskets', {
       "title": "Home",
       "config": config,
       "casketsItem" : caskets
>>>>>>> a6bc618d914ab35829e8fbfad65267a5573deca5
   });
});

app.get('/services_cardgames', function (req, res) {
    res.render('cardgames', {
        "title": "Home",
        "config": config,
        "cardgamesItem" : cardgames
    });
 });
 app.get('/services_wifi', function (req, res) {
    res.render('wifi', {
        "title": "Home",
        "config": config,
        "wifiItem" : wifi
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