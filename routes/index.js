var express = require('express');
var Promise = require('bluebird');
var updateData = require('../utils/updateExchanges');
var router = express.Router();

// var Exchange = require('../models/index');
// Promise.promisifyAll(require('fs'));
// var Poloniex = Promise.promisifyAll(require('poloniex.js'));


/**
 * Users routes
 */
// router.use('/users', require('./users'))



/**
 * App routes
 */
// router.get('/', function(req, res, next) {
//   res.render('index', {});
// });


router.get('/', function(red, res, next) {

  Promise.try(function(){
      return updateData();
  }).then(function(value){
    console.log('Passed as a Promise to the router:\r\n\r\n', value, '\r\n\r\n');
    res.render('index', { value: value } );
  }).catch(function(err){
      next(err);
  });

});

router.get('/update', function(req, res, next) {

  updateData().then(function(exchangeData){
    console.log('json', exchangeData);
    res.json(exchangeData);
  });

  // return;

  /** 
   * Working.
   */
  // Exchange.getTickers(function(err, result){
  //   if(result != undefined) {
  //     res.json(result);
  //   }
  //   else {
  //     console.error('Egads! Error.');
  //     return false;
  //   }
  // });
})


module.exports = router;
