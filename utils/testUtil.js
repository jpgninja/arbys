var Promise = require('bluebird');
var Poloniex = require('poloniex.js');

Poloniex.STRICT_SSL = false;

module.exports = function testUtil(){
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
  });
}