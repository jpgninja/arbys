var express = require('express');
var Exchange = require('../models/index');
var router = express.Router();


/**
 * Users routes
 */
// router.use('/users', require('./users'))



/**
 * App routes
 */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/update', function(req, res, next) {

  Exchange.getTickers(1, function(err, result){
    if(result != undefined) {
      res.json(result);
    }
    else {
      console.error('Egads! Error.');
      return false;
    }
  });
})


module.exports = router;
