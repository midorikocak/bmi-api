var express = require("express");
var router = express.Router();

/* POST answer BMI. */
/*CREATE */
router.post("/", function (req, res, next) {
  console.log(req.body);

  let weight = req.body.weight;
  let height = req.body.height;
  let bmi = ((weight / height / height) * 10000).toFixed(2);
  let datetime = new Date().toLocaleString();
  console.log(datetime);

  let responseObject = { bmi: bmi, datetime: datetime };

  res.json(responseObject);
});

module.exports = router;
