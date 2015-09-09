var Promise = require('bluebird');
var KrakenClient = require('kraken-api');

Promise.promisifyAll(KrakenClient);
// Promise.promisifyAll(KrakenClient.prototype);

module.exports = function updateKraken(){
  var kraken = new KrakenClient('api_key', 'api_secret');

  var apiArgs = { "pair": 'XBTCXLTC' };


  return kraken.apiAsync('Ticker', apiArgs).then(function(err, result) {
    console.log(err, result);
    
    if (result != undefined) {
      console.log('utils/updateKraken result:\r\n\r\n', result, '\r\n\r\n');
      return result;
    }
    else {
      console.error('utils/updateKraken error: \r\n\r\nResult is undefined.\r\n\r\n');
      return false;
    }
  }).catch(function(err) {
    next(err);
  });


  /**
   * Works, but uses callbacks.
   */
  // kraken.api('Ticker', apiArgs, function(err, result) {
  //   if (err) {
  //     console.error('utils/updateKraken error: \r\n\r\n', err ,'\r\n\r\n');
  //   }
  //   else if (result != undefined) {
  //     console.log('utils/updateKraken result:\r\n\r\n', result.result, '\r\n\r\n');
  //     return result.result;
  //   }
  //   else {
  //     console.error('utils/updateKraken error: \r\n\r\nResult is undefined.\r\n\r\n');
  //     return false;
  //   }
  // });
}