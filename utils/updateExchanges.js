var Promise = require('bluebird');
var Poloniex = require('poloniex.js');
// var KrakenClient = require('kraken-api');

Promise.promisifyAll(Poloniex.prototype);
Poloniex.STRICT_SSL = false;

module.exports = function updateExchanges(){
  var poloniex = new Poloniex();

  return poloniex.getTickerAsync().then(function(result) {
    if (result != undefined) {
      console.log('utils/updateExchange result:\r\n\r\n', result.BTC_ETH, '\r\n\r\n');
      return result.BTC_ETH;
    }
    else {
      console.error('utils/updateExchange error: \r\n\r\nResult is undefined.\r\n\r\n');
      return false;
    }
  }).catch(function(err) {
      next(err);
  });

}