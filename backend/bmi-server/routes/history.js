var express = require("express");
var router = express.Router();
var Measurements = require("../models/measurements");

/* Create */
router.post("/", function (req, res, next) {
  console.log(req.body);

  let weight = req.body.weight;
  let height = req.body.height;

  let bmi = ((weight / height / height) * 10000).toFixed(2);
  let dateTime = new Date().toLocaleString();

  let responseObject = { bmi: bmi, dateTime: dateTime };

  Measurements.add(responseObject, function (err) {
    if (err) {
      res.status(500).send("Server Error");
    } else {
      res.json(responseObject);
    }
  });
});

/* All */

router.get("/", function (req, res, next) {
  Measurements.all(function (err, data) {
    if (err) {
      res.status(500).send("Server Error");
    } else {
      res.json(data);
    }
  });
});

/* One */

router.get("/:id", function (req, res, next) {
  const id = parseInt(req.params.id);
  Measurements.one(id, function (err) {
    if (err) {
      res.status(500).send("Server Error");
    } else {
      res.status(200).send();
    }
  });
});

/* Update */
router.put("/:id", function (req, res, next) {
  const id = parseInt(req.params.id);

  let weight = req.body.weight;
  let height = req.body.height;

  let bmi = ((weight / height / height) * 10000).toFixed(2);
  let dateTime = new Date().toLocaleString();

  let newData = { bmi: bmi, dateTime: dateTime };

  Measurements.update(id, newData, function (err) {
    if (err) {
      res.status(500).send("Server Error");
    } else {
      res.status(200).send();
    }
  });
});

/* Delete */

router.delete("/:id", function (req, res, next) {
  const id = parseInt(req.params.id);

  Measurements.remove(id, function (err, data) {
    if (err) {
      res.status(500).send("Server Error");
    } else {
      res.status(200).send();
    }
  });
});

module.exports = router;
