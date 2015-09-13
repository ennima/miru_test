var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  //.send('respond with a resource');
});

router.get('/ale', function(req, res) {
  res.send('hola ale');
});

module.exports = router;
