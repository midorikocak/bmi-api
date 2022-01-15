const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./data/database.db");

function add(data, callback) {
  const sql =
    "INSERT INTO measurements (bmi, datetime) VALUES ('24,5', '15/01/2022, 11:34:41')";
  db.run();
}

function all(callback) {
  const sql = "SELECT * FROM measurements";
  db.all();
}

function one(id, callback) {
  const sql = "SELECT * FROM measurements id=1";
  db.get();
}

function update(id, newData, callback) {
  const sql = "UPDATE measurements SET bmi = 24.6 WHERE id = 1";
  db.run();
}

function remove(id, callback) {
  const sql = "DELETE FROM measurements WHERE id=1";
  db.run();
}

module.exports = { add, all, one, update, remove };
