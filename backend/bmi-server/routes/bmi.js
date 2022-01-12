var express = require('express');
var router = express.Router();

/* POST answer BMI. */
router.post('/', function(req, res, next) {

  console.log(req.body)

  let weight = req.body.weight;
  let height = req.body.height;

  let bmi = ((weight / height / height) * 10000).toFixed(2);
  let dateTime = (new Date()).toLocaleString();

  let responseObject = {bmi: bmi, dateTime: dateTime};

  res.json(responseObject);
});

module.exports = router;
