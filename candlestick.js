module.exports.doji = function(){

  var doji =require('technicalindicators').doji;

  var singleInput = {
    open: [30.10],
    high: [32.10],
    close: [30.13],
    low: [28.10],
  }

  return doji(singleInput);

}

module.exports.threeblackcrows = function(){

  var threeblackcrows = require('technicalindicators').threeblackcrows;

  var input = {
    open: [21.65,21.48,21.25],
    high: [21.82,21.57,21.35],
    close: [21.32,21.10,20.70],
    low: [21.25,20.97,20.60]
  }

  return threeblackcrows(input);

}

module.exports.threewhitesoldiers = function(){

  var threewhitesoldiers = require('technicalindicators').threewhitesoldiers;

  var input = {
    open: [21.12,21.48,21.80],
    close: [21.65,22.20,22.65],
    high: [21.83,22.40,22.80],
    low: [20.85,21.36,21.66]
  }

  return threewhitesoldiers(input);

}
