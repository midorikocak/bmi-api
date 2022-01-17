const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data/database.db');

/* 
  run = is the method when we don't have a data response 
  all = gives all records from the query
  get = gives only one record from the query
*/

function add(data, callback) {
  const sql = "INSERT INTO measurements(bmi, date_time) VALUES(?, ?)";
  db.run(sql, [data.bmi, data.date_time], callback);
}

function all(callback) {
  const sql = "SELECT * FROM measurements";
  db.all(sql, callback);
}

function one(id, callback) {
  const sql = "SELECT * FROM measurements WHERE id=?";
  db.get(sql, id, callback);
}

function update(id, newData, callback) {
  const sql = "UPDATE measurements SET bmi=?, date_time=? WHERE id=?";
  db.run(sql, [id, newData.bmi, newData.date_time], callback);
}

function remove(id, callback) {
  const sql = "DELETE FROM measurements WHERE id=?";
  db.run(sql, id, callback);
}

module.exports = { add, one, all, update, remove }
