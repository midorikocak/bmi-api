var express = require('express');
var router = express.Router();

/* POST bmi page. */
router.post('/', function(req, res, next) {
	let weight = req.body.weight;
	let height = req.body.height;

	let bmi = ((weight / height / height) * 10000).toFixed(2);
	let date_time = new Date().toLocaleString();

	let responseObject = { bmi: bmi, date_time: date_time };

	Measurements.add(responseObject, function (err) {
		if (err) {
      res.status(500).send("Server error");
		} else {
      res.json(responseObject);
		}
	});
});

module.exports = router;
