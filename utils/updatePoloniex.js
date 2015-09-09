var Promise = require('bluebird');
var Poloniex = require('poloniex.js');

Promise.promisifyAll(Poloniex.prototype);
Poloniex.STRICT_SSL = false;

module.exports = function updatePoloniex(){
  var poloniex = new Poloniex();

  return poloniex.getTickerAsync().then(function(result) {
    if (result != undefined) {
      // console.log('utils/updatePoloniex result:\r\n\r\n', result.BTC_ETH, '\r\n\r\n');
      return result.BTC_ETH;
    }
    else {
      console.error('utils/updatePoloniex error: \r\n\r\nResult is undefined.\r\n\r\n');
      return false;
    }
  }).catch(function(err) {
      next(err);
  });

}