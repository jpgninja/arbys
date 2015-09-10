var Promise = require('bluebird');
var Poloniex = require('poloniex.js');
var tally = require('../utils/cleanOrderBook');

Poloniex.STRICT_SSL = false;

module.exports = function bookPoloniex(){
  return Promise.try(function(){
    var poloniex = Promise.promisifyAll(new Poloniex());
    return poloniex.getOrderBookAsync('BTC', 'ETH');
    
  }).then(function(result){
    if (result == null) {
      throw new Error("Result is undefined.");
    } 
    else {
      return result;
    }

  }).then(function(result) {
    return tally(result, 'poloniex');

  });
}