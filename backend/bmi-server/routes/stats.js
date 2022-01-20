var express = require("express");
var router = express.Router();
var Measurements = require("../models/measurements");

/* Create */
router.get("/", function (req, res, next) {
  Measurements.stats(function (err, data) {
    if (err) {
      res.status(500).send("Server Error");
    } else {
      res.format({
        'html': function(){
          res.render('stats', {measurements: data.measurements, averageBmi: data.averageBmi});
        },
        'json': function(){
          res.json(data);
        },
        'text': function(){
          res.send('Measurements: ' + data.measurements + 'Average BMI: ' + data.averageBmi);
        }
      });
      //res.json(data);
    }
  });
});

module.exports = router;