var express = require('express');
// var Poloniex = require('poloniex/poloniex.js');
// var autobahn = require('autobahn');
var Poloniex = require('../models/index');
var router = express.Router();

// Poloniex.STRICT_SSL = false;
// var poloniex = new Poloniex();


/**
 * Users routes
 */
router.use('/users', require('./users'))



/**
 * App routes
 */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/update', function(req, res, next) {
  // Poloniex.get(function (err, docs) {
    Poloniex.getWeatherResults(function(err, result){
      if(result != undefined){
        model.data.push(result);  
        callback();
      }else{
        callback();
      }
    });
    res.json(model);
  // })
})


module.exports = router;
