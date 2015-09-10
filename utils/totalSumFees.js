var Promise = require('bluebird');
var Poloniex = require('poloniex.js');

Poloniex.STRICT_SSL = false;

module.exports = function totalSumFees(exchange){
  var Poloniex_MakerTakerVolume = {
    []
  };
  var Kraken_MakerTakerVolume = {
    [0.0005, 0.0010, 10000],
    [0.0004, 0.0009, 50000],
    [0.0003, 0.0008, 100000],
    [0.0002, 0.0007, 500000],
    [0.0001, 0.0006, 1000000],
    [0, 0.0005, 9999999]
  };

  switch (exchange) {
    case 'kraken':
      return Kraken_MakerTakerVolume;
      break;

    case 'poloniex':
      return Poloniex_MakerTakerVolume;
      break;

    default:
      break;
  }
}

/*
  Kraken: ETHXBT
  Maker,   Taker,  Volume
  0.05%,   0.10%,  < 10,000
  0.04%,   0.09%,  < 50,000
  0.03%,   0.08%,  < 100,000
  0.02%,   0.07%,  < 500,000
  0.01%,   0.06%,  < 1,000,000
  0.00%,   0.05%,  > 1,000,000
*/