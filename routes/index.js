var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/checkequal',function(req,res,next) {
	var source = req.body.source;
	var destination = req.body.destination;
	res.send({
			"equals": source === destination
	});
});

module.exports = router;

