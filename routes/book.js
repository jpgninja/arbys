/**
 * Book Routing
 * slug: book
 */

var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var orderBookPoloniex = require('../utils/bookPoloniex');
var orderBookKraken = require('../utils/bookKraken');


router.get('/poloniex', function(req, res) {
  Promise.try(function() {
    return orderBookPoloniex();

  }).then(function(orderBook) {
    res.render('orderbook', { title: 'Poloniex Order Book', orderBook: orderBook });

  });
})


router.get('/kraken', function(req, res) {
  Promise.try(function() {
    return orderBookKraken();

  }).then(function(orderBook) {
    res.render('orderbook', { title: 'Kraken Order Book', orderBook: orderBook });

  });
})


router.get('/all', function(req, res) {
  var out = {};
  Promise.try(function() {
    return orderBookKraken();

  }).then(function(result) {
    out.kraken = result;
    return orderBookPoloniex();

  }).then(function(result) {
    out.poloniex = result;
    res.render('orderBookAssessment', { title: 'Kraken Order Book', orderBook: out });

  });
})

module.exports = router