var express = require('express');
var router = express.Router();

// Applying middleware to all routes in the router
router.use(function (req, res, next) {
  if (req.user === 'farmer') {
    next()
  } else {
    res.status(403).send('Forbidden')
  }
})

// Secret animals page
router.get('/secret', function(req, res) {
  res.send('Wolf, Fox, Eagle')
})

module.exports = router