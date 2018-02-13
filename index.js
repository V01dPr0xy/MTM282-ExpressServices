var express = require('express');
var pug = require('pug');
var path = require('path');
var data = require('./data/data');
var config = require("./config.json");
var caskets = require("./casketsItem.json");
var cardgames = require("./cardgamesItem.json");
var wifi = require("./wifiItem.json");
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
        "casketItem": caskets,
        "cardgamesItem": cardgames,
        "wifiItems": wifi
    });
});

app.get('/order', function (req, res) {
    res.render('orders', {
        "title": "Order",
        "config": config,
        "casketsItem": caskets,
        "cardgamesItem": cardgames,
        "wifiItem": wifi
    });
});

app.get('/services_caskets', function (req, res) {
    res.render('caskets', {
        "title": "Caskets",
        "config": config,
        "casketsItem": caskets
    });
});

app.get('/services_cardgames', function (req, res) {
    res.render('cardgames', {
        "title": "Card Games",
        "config": config,
        "cardgamesItem": cardgames
    });
});

app.get('/services_wifi', function (req, res) {
    res.render('wifi', {
        "title": "WiFi",
        "config": config,
        "wifiItem": wifi
    });
});

function loadData(item) {
    var arr = [];
    console.log(item);
    if (!(item.name === undefined)) {
        arr.push(item.name);
    }
    if (!(item.address === undefined)) {
        arr.push(item.address);
    }
    if (!(item.phone === undefined)) {
        arr.push(item.phone);
    }

    if (!(item.cardgame1 === undefined)) {
        arr.push(item.cardgame1);
    }
    if (!(item.cardgame2 === undefined)) {
        arr.push(item.cardgame2);
    }
    if (!(item.cardgame3 === undefined)) {
        arr.push(item.cardgame3);
    }
    if (!(item.cardgame4 === undefined)) {
        arr.push(item.cardgame4);
    }
    if (!(item.cardgame5 === undefined)) {
        arr.push(item.cardgame5);
    }
    if (!(item.cardgame6 === undefined)) {
        arr.push(item.cardgame6);
    }
    if (!(item.cardgame7 === undefined)) {
        arr.push(item.cardgame7);
    }
    if (!(item.cardgame8 === undefined)) {
        arr.push(item.cardgame8);
    }

    if (!(item.caskets1 === undefined)) {
        arr.push(item.caskets1);
    }
    if (!(item.caskets2 === undefined)) {
        arr.push(item.caskets2);
    }
    if (!(item.caskets3 === undefined)) {
        arr.push(item.caskets3);
    }
    if (!(item.caskets4 === undefined)) {
        arr.push(item.caskets4);
    }
    if (!(item.caskets5 === undefined)) {
        arr.push(item.caskets5);
    }
    if (!(item.caskets6 === undefined)) {
        arr.push(item.caskets6);
    }
    if (!(item.caskets7 === undefined)) {
        arr.push(item.caskets7);
    }
    if (!(item.caskets8 === undefined)) {
        arr.push(item.caskets8);
    }

    if (!(item.wifi1 === undefined)) {
        arr.push(item.wifi1);
    }
    if (!(item.wifiwifi2 === undefined)) {
        arr.push(item.wifi2);
    }
    if (!(item.wifi3 === undefined)) {
        arr.push(item.wifi3);
    }
    if (!(item.wifi4 === undefined)) {
        arr.push(item.wifi4);
    }
    if (!(item.wifi5 === undefined)) {
        arr.push(item.wifi5);
    }
    if (!(item.wifi6 === undefined)) {
        arr.push(item.wifi6);
    }
    if (!(item.wifi7 === undefined)) {
        arr.push(item.wifi7);
    }
    if (!(item.wifi8 === undefined)) {
        arr.push(item.wifi8);
    }


    return arr;
}

app.post('/submitted', urlencodedparser, function (req, res) {

    var Vals = loadData(req.body);
    res.render('submitted', {
        "title": "Order Submitted",
        "config": config,
        order: {
            writer: fs,
            Values: Vals
        }
    });
});

// fs.writeFile('public/Pug.html', 'Data to render'); -> writing a file to a folder
//                                                          and to

// Array.join(); -> allows for all elements of an array to be combined into a string

app.listen(3000);