var express = require('express');
var cookieParser = require('cookie-parser');

var indicator = require('./indicators')
var candlestick = require('./candlestick')

var app = express();

app.use(cookieParser());

//Indicators
var bollingerBand = indicator.bollinger();
var macd = indicator.MACD();
var rsi = indicator.RSI();

//Chart Patterns
var doji = candlestick.doji();
var threeblackcrows = candlestick.threeblackcrows();

app.get("/", function(req,res){

  res.cookie('bollinger', bollingerBand);
  res.cookie('macd', macd);
  res.cookie('rsi', rsi);
  res.cookie('dojiPattern', doji)
  res.cookie('threeblackcrows', threeblackcrows)
  res.send('Cookies have been set');
});

app.get("/indicators", function(req,res){
  res.send(JSON.stringify({
                            "bollinger":req.cookies.bollinger,
                            "rsi":req.cookies.rsi,
                            "macd":req.cookies.macd

                          }));
});

app.get("/patterns", function(req,res){
  res.send(JSON.stringify({
                            
                            "dojiPattern":req.cookies.dojiPattern,
                            "threeblackcrows":req.cookies.threeblackcrows

                          }));
});




app.listen(3000, function(){
  console.log("listening to port 3000")
  console.log(bollingerBand[0]['pb'])

});
