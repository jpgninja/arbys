var express = require('express');
var Promise = require('bluebird');
var testUtil = require('../utils/testUtil');
var router = express.Router();


/**
 * Various routes
 */
router.use('/book', require('./book'));


/**
 * Main routes
 */
router.get('/', function(red, res, next) {
  var exchangeData = {};

  Promise.try(function() {
    return updatePoloniex();

  }).then(function(poloniexData) {
    exchangeData.poloniex = poloniexData;
    return updateKraken();

  }).then(function(krakenData) {
    exchangeData.kraken = krakenData;
    return exchangeData;

  }).then(function(exchangeData) {
    res.render('index', { exchange: exchangeData });

  });
});


// router.get('/test', function(red, res, next) {
//   Promise.try(function() {
//     return testUtil();
//   }).then(function(orderBook) {
//     res.render('orderbook', { orderBook: orderBook });
//   });
// });

// router.get('/list', function(red, res, next) {
//   Example:
//   Market1(fixed fee: 1, variable fee: 2%, BBO: 105/107), 
//   Market2(fixed fee: 0.5, variable fee 1%, BBO: 98/100)
//   Variable Fees: Buy asset at M2 for (100 + 1) and sell to M1 for (105-2.1)
//   PnL with fixed fees applied: (105-0.5) - (100+1)
//   Apply same logic to all markets and chose the most profitable one.
// });

module.exports = router;
