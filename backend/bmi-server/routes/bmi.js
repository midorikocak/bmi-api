var express = require("express");
var router = express.Router();

/* POST answer BMI. */
/*CREATE */
rrouter.post("/", function (req, res, next) {
  let weight = req.body.weight;
  let height = req.body.height;
  let bmi = ((weight / height / height) * 10000).toFixed(2);
  let datetime = new Date().toLocaleString();

  let responseObject = { bmi: bmi, datetime: datetime };
  Measurements.add(responseObject, function (err) {
    if (err) {
      res.status(500).send("Server error");
    } else {
      res.json(responseObject);
    }
  });
});
module.exports = router;
