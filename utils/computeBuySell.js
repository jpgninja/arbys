var Promise = require('bluebird');
var KrakenClient = require('kraken-api');

module.exports = function computeBuySell(){

/**

Bitcoin on exchange B = X = (Start amount / (rate #1) * (1 - trading fee #1)- withdrawal fee #1)
USD on exchange A = Y = X  (rate #2)  (1 - trading fee #2) - withdrawal fee #2
profit = (Y/X - 1)*100 (outcome in %)

ETH on Poloniex = X = ( Amount / RatePoloniex * ( 1 - TradeFeePoloniex ) )
BTC on Kraken = Y = ( X * RateKraken * ( 1 - TradeFeeKraken ) )
Profit = ( Y/X - 1 ) * 100

*/
  // return Promise.try(function(){
  //   var kraken = Promise.promisifyAll(new KrakenClient('api_key', 'api_secret'));
  //   var apiArgs = { "pair": 'XBTCXLTC' };
    
  //   return kraken.apiAsync('Ticker', apiArgs);
  // }).then(function(result){
  //   if (result == null) {
  //     throw new Error("Result is undefined.");
  //   } else {
  //     return result.result.XXBTXLTC;
  //   }
  // });

}