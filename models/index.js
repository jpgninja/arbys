var Promise = require('bluebird');
var KrakenClient = require('kraken-api');
var Poloniex = Promise.promisifyAll(require('poloniex.js'));
var bhttp = require('bhttp');
// Promise.promisifyAll(require('poloniex.js'));
// var kraken = new KrakenClient('api_key', 'api_secret');




/**
 * Ping exchanges, get ticker values
 */
exports.getTickers = function(cb) {
  var poloniex = new Poloniex();

  // poloniex.getTicker().then(function(val) {
  //   console.log(val);
  // })
  // .catch(function(e) {
  //   console.error("Egads! Error.");
  // });

  // poloniex.getTicker(function(err, res){
  //   if (err) {
  //     console.error('error!');
  //   }
  //   else {
  //     cb(null, res.BTC_ETH);
  //   }
  // });


  return Promise.try(function() {
    return Promise.all([
      bhttp.get("http://api.fixer.io/latest", {
        decodeJSON: true
      }), bhttp.get("https://blockchain.info/ticker", {
        decodeJSON: true
      })
    ]);
  }).spread(function(fixerRates, blockchainRates) {
    var eurRates;
    eurRates = fixerRates.body.rates;
    eurRates.BTC = 1 / blockchainRates.body.EUR["15m"];
    return Promise.resolve(eurRates);
  }).then(function(rates) {
    lastRates = rates;
    lastRateCheck = Date.now();
    return Promise.resolve(rates);
  }).catch(function(err) {
    return Promise.resolve(lastRates);
  });



  Promise.try(function(){
    return getPoloniexTicker();
    // return poloniex.getTicker(function(err, res){
    //   if (err) {
    //     console.error('error!');
    //   }
    //   else {
    //     console.log('res', res.BTC_ETH);
    //     return res.BTC_ETH;
    //     // cb(null, res.BTC_ETH);
    //   }
    // });
  }).then(function(value){
    console.log('made it to then12222', value);
    // return 1;
    return value;

  }).then(function(newValue){
      res.send("Done!");
  }).catch(function(err){
      // next(err);
      console.error(err);
  });
}


/**
 * Return
 */
exports.getPoloniexTicker = function() {
  console.log('BINGOOOO!@#!@#!@#!@#');
  var poloniex = new Poloniex();

  poloniex.getTicker(function(err, res){
    if (err){
      // handle error
      console.log('error!');
    }
    
    // console.log(res.BTC_ETH);
    return res.BTC_ETH;
  });
}


/**
 * Get dummy data
 */
exports.dummy = function(id, cb) {
  var docs = {
    kraken: [
      [10, Math.random()-0.5],
      [50, Math.random()-0.5],
      [100, Math.random()-0.5],
      [250, Math.random()-0.5],
      [500, Math.random()-0.5],
      [1000, Math.random()-0.5],
    ],
    poloniex: [
      [10, Math.random()-0.5],
      [50, Math.random()-0.5],
      [100, Math.random()-0.5],
      [250, Math.random()-0.5],
      [500, Math.random()-0.5],
      [1000, Math.random()-0.5],
    ]
  };

  cb(null, docs);
}