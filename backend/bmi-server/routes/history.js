var express = require("express");
var router = express.Router();
var Measurements = require("../models/measurements");

/* all */
router.get("/", function (req, res, next) {
  Measurements.all(function (err, data) {
    if (err) {
      res.status(500).send("There was an error");
    } else {
      res.json(data);
    }
  });
});

/* one */
router.get("/:id", function (req, res, next) {
  const id = parseInt(req.params.id);
  Measurements.one(id, function (err, data) {
    if (err) {
      res.status(500).send("There was an error");
    } else {
      res.json(data);
    }
  });
});

/* update */
router.put("/:id", function (req, res, next) {
  const id = parseInt(req.params.id);

  let weight = req.body.weight;
	let height = req.body.height;

	let bmi = ((weight / height / height) * 10000).toFixed(2);
	let date_time = new Date().toLocaleString();

	let newData = { bmi: bmi, date_time: date_time };
  
  Measurements.update(id, newData, function (err) {
    if (err) {
      res.status(500).send("There was an error");
    } else {
      res.status(200).send();
    }
  });
});

/* delete */
router.delete("/:id", function (req, res, next) {
  const id = parseInt(req.params.id);
  Measurements.remove(id, function (err) {
    if (err) {
      res.status(500).send("There was an error");
    } else {
      res.status(200).send();
    }
  });
});

module.exports = router;
