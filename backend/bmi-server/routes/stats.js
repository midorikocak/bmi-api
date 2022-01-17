var express = require("express");
var router = express.Router();
var Measurements = require("../models/measurements");

/* GET stats page. */
router.get("/", function (req, res, next) {
  Measurements.stats(function (err, data) {
    if (err) {
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
