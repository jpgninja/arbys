var Promise = require('bluebird');
var KrakenClient = require('kraken-api');
var tally = require('../utils/cleanOrderBook');

module.exports = function bookKraken(){
  return Promise.try(function(){
    var kraken = Promise.promisifyAll(new KrakenClient());
    var apiArgs = { "pair": "XETHXXBT" };
    return kraken.apiAsync('Depth', apiArgs);
    
  }).then(function(result){
    if (result == null) {
      throw new Error("Result is undefined.");
    } 
    else {
      return result.result.XETHXXBT;
    }

  }).then(function(result) {
    return tally(result, 'kraken');
  });
}