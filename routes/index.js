var express = require('express');
var Promise = require('bluebird');
var updatePoloniex = require('../utils/updatePoloniex');
var updateKraken = require('../utils/updateKraken');
var router = express.Router();

// var Exchange = require('../models/index');
// Promise.promisifyAll(require('fs'));
// var Poloniex = Promise.promisifyAll(require('poloniex.js'));


/**
 * Users routes
 */
// router.use('/users', require('./users'))

router.get('/', function(red, res, next) {
  var exchangeData = {};

  Promise.try(function() {
    return updatePoloniex();
  }).then(function(value) {
    console.log('Poloniex -> Router:\r\n\r\n', value, '\r\n\r\n');
    exchangeData.poloniex = value;
    
    return updateKraken();
    // res.render('index', { value: value } );
  }).then(function(value) {
    console.log('Kraken -> Router:\r\n\r\n', value, '\r\n\r\n');
    res.render('index', { exchangeData: exchangeData } );
  }).catch(function(err) {
    next(err);
  });

});

router.get('/update', function(req, res, next) {

  updateData().then(function(exchangeData) {
    console.log('json', exchangeData);
    res.json(exchangeData);
  });

})


module.exports = router;
