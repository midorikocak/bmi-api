var express = require("express");
const { create } = require("hbs");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  console.log(req.body);

  let weight = req.body.weight;
  let height = req.body.height;

  let bmi = ((weight / height / height) * 10000).toFixed(2);
  let datetime = new Date().toLocaleString();

  let responseObject = { bmi: bmi, datetime: datetime };
  res.json(responseObject);
});

//create
router.post("/", function (req, res, next) {
  console.log(req.body);

  let weight = req.body.weight;
  let height = req.body.height;

  let bmi = ((weight / height / height) * 10000).toFixed(2);
  let datetime = new Date().toLocaleString();

  let responseObject = { bmi: bmi, datetime: datetime };
  res.json(responseObject);
});

//creates
router.post("/", function (req, res, next) {
  //console.log(req.body);

  let weight = req.body.weight;
  let height = req.body.height;

  let bmi = ((weight / height / height) * 10000).toFixed(2);
  let datetime = new Date().toLocaleString();

  let responseObject = { bmi: bmi, datetime: datetime };

  Measurements.add(responseObject, function (err) {
    if (err) {
      res.status(500).send("There was an error");
    } else {
      res.json(responseObject);
    }
  });
});

module.exports = router;
