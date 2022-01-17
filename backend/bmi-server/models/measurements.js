const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data/database.db');

function add(data, callback) {
    const sql = "INSERT INTO measurements(bmi, datetime) VALUES (?, ?)";
    db.run(sql, [data.bmi, data.datetime], callback);
}

/* get gives only one record from query, all gives all of them */
function all(callback) {
    const sql = "SELECT * FROM measurements";
    db.all(sql, callback);
}

function one(id, callback) {
    const sql = "SELECT*FROM measurements WHERE id=?";
    db.get(sql, id, callback);
}

function update(id, newData, callback) {
    const sql = "UPDATE measurements SET bmi = ?, datetime = ? WHERE id= ?";
    db.run(sql, [newData.bmi, newData.datetime, id], callback);
}

function remove(id, callback) {
    const sql = "DELETE FROM measurements WHERE id=?";
    db.run(sql, id, callback);
}

module.exports = { add, all, one, update, remove}