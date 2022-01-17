const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./data/database.db");

/* run: is the method when we dont have a data response*/
/* all: gives me all records from the query*/
/* get: gives me only one records from the query*/
function add(data, callback) {
  const sql = "INSERT INTO measurements(bmi, datetime) VALUES(?, ?)";
  db.run(sql, [data.bmi, data.datetime], callback);
}

function all(callback) {
  const sql = "SELECT * FROM measurements";
  db.all(sql, callback);
}

function one(id, callback) {
  const sql = "SELECT * FROM measurements WHERE id= ?";
  db.get(sql, id, callback);
}

function update(id, newData, callback) {
  const sql = "UPDATE measurements SET bmi = ?, datetime = ? WHERE id = ?";
  db.run(sql, [newData.bmi, newData.datetime, id], callback);
}

function remove(id, callback) {
  const sql = "DELETE FROM measurements WHERE id=?";
  db.run(sql, id, callback);
}

function stats(callback) {
  const sql =
    "SELECT AVG(BMI) AS 'averageBmi', COUNT(*) AS 'measurements' FROM measurements";
  db.get(sql, callback);
}

module.exports = { add, all, one, update, remove, stats };
