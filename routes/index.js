var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.cookies)
  res.render('index', {cookies : req.cookies});
});

module.exports = router;
