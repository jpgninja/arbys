var Promise = require('bluebird');
var KrakenClient = require('kraken-api');
var Poloniex = Promise.promisifyAll(require('poloniex.js'));

// Promise.promisifyAll(require('poloniex.js'));
// var kraken = new KrakenClient('api_key', 'api_secret');




/**
 * Ping exchanges, get ticker values
 */
exports.getTickers = function(exchange, cb) {
  var poloniex = new Poloniex();

  // poloniex.getTicker().then(function(val) {
  //   console.log(val);
  // })
  // .catch(function(e) {
  //   console.error("Egads! Error.");
  // });

  poloniex.getTicker(function(err, res){
    if (err) {
      console.error('error!');
    }
    else {
      cb(null, res.BTC_ETH);
    }
  });
}


/**
 * Return
 */
exports.getPoloniexTicker = function() {
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