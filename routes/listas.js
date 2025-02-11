var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('listas', {title:'Minhas Listas', body:'cu'});
});

module.exports = router;
