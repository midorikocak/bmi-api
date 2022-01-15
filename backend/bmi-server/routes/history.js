var express = require("express");
var router = express.Router();
var Measurements = require("../models/measurements");

/*CREATE  MARGAAA*/
router.post("/", function (req, res, next) {
  console.log(req.body);

  let weight = req.body.weight;
  let height = req.body.height;
  let bmi = ((weight / height / height) * 10000).toFixed(2);
  let dateTime = new Date().toLocaleString();
  console.log(dateTime);

  let responseObject = { bmi: bmi, dateTime: dateTime };
  Measurements.add(responseObject, function (err, data) {
    if (err) {
      res.status(500).send("Server error");
    } else {
      res.json(responseObject);
    }
  });

  res.json(responseObject);
});

/*ALL (read) MARGAAA*/
router.get("/", function (req, res, next) {
  Measurements.all(function (err, data) {
    if (err) {
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
});

/*ONE (read) MARGAAA*/
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

/*UPDATE MARGAAA*/
router.put("/:id", function (req, res, next) {
  const id = parseInt(req.params.id);

  let weight = req.body.weight;
  let height = req.body.height;

  let bmi = ((weight / height / height) * 10000).toFixed(2);
  let dateTime = new Date().toLocaleString();

  let newData = { bmi: bmi, dateTime: dateTime };

  Measurements.update(id, newData, function (err) {
    if (err) {
      res.status(500).send("Server error");
    } else {
      res.status(200).send();
    }
  });
});

/*DELETE MARGAAA*/
router.delete("/:id", function (req, res, next) {
  Measurements.remove(id, function (err) {
    if (err) {
      res.status(500).send("Server error");
    } else {
      res.status(200).send();
    }
  });
});

module.exports = router;
