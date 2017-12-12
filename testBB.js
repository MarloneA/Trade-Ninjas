var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

var indicator = require('./indicators')
var candlestick = require('./candlestick')

var app = express();

var port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser());
//Indicators
var bollingerBand = indicator.bollinger();
var macd = indicator.MACD();
var rsi = indicator.RSI();

//Chart Patterns
var doji = candlestick.doji();
var threeblackcrows = candlestick.threeblackcrows();
var threewhitesoldiers = candlestick.threewhitesoldiers();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/cookies", function(req,res){

  res.cookie('bollinger', bollingerBand);
  res.cookie('macd', macd);
  res.cookie('rsi', rsi);

  res.cookie('dojiPattern', doji)
  res.cookie('threeblackcrows', threeblackcrows)
  res.cookie('threewhitesoldiers', threewhitesoldiers)

  res.send('Cookies have been set');
});

app.get("/indicators", function(req,res){

  res.writeHead(200, {'Content-Type':'application/json'})
  res.end(JSON.stringify({
                            "1":"bollinger",
                            "2":"MACD",
                            "3":"RSI"

                          }));
});

app.post("/datafeed", function(req,res){

  res.writeHead(200, {'Content-Type':'application/json'})
  res.end(JSON.stringify({"message" : "received"}));
  console.log(JSON.stringify(req.body));
});

app.get("/patterns", function(req,res){

  res.writeHead(200, {'Content-Type':'application/json'})
  res.end(JSON.stringify({

                            "1":"doji",
                            "2":"threeblackcrows",
                            "3":"threewhitesoldiers"

                          }));
});

app.get("/indicators/bollinger", function(req,res){

  res.writeHead(200, {'Content-Type':'application/json'})
  res.end(JSON.stringify({
                            "BollingerBands":req.cookies.bollinger
                          }));
});

app.get("/indicators/MACD", function(req,res){

  res.writeHead(200, {'Content-Type':'application/json'})
  res.end(JSON.stringify({
                            "MACD":req.cookies.macd
                          }));
});

app.get("/indicators/RSI", function(req,res){

  res.writeHead(200, {'Content-Type':'application/json'})
  res.end(JSON.stringify({
                            "RSI":req.cookies.rsi
                          }));
});

app.get("/patterns/doji", function(req,res){
  res.writeHead(200, {'Content-Type':'application/json'})
  res.end(JSON.stringify({

                            "dojiPattern":req.cookies.dojiPattern

                          }));
});

app.get("/patterns/threeblackcrows", function(req,res){
  res.writeHead(200, {'Content-Type':'application/json'})
  res.end(JSON.stringify({

                            "threeblackcrows":req.cookies.threeblackcrows

                          }));
});


app.get("/patterns/threewhitesoldiers", function(req,res){
  res.writeHead(200, {'Content-Type':'application/json'})
  res.end(JSON.stringify({

                            "threewhitesoldiers":req.cookies.threewhitesoldiers

                          }));
});




app.listen(port, function(){
  console.log(`listening to port ${port}`)
});
