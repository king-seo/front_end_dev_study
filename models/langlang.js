var mysql = require('mysql');
var dbconfig = require('../config/database.js');
var connection = mysql.createConnection(dbconfig);

const TableName = 'LangLang'


const findOne = (id) => {

}

const findAll = () => {
  connection.query(`SELECT * from ${TableName}`, function (err, rows, fields) {
    if (err) throw err;
    console.log(rows)
  });
}

const updateOne = (id) => {

}

const deleteOne = (id) => {

}

module.exports = {
  findAll
}