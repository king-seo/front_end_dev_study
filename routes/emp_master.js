var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../config/database.js');
var connection = mysql.createConnection(dbconfig);

const TableName = 'emp_master'

/* GET users listing. */
//R -- emp_master table 볼 수 있음.
router.get('/', function (req, res) {
  connection.query(`SELECT * from ${TableName}`, function (err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
  });
  res.status(200)
  res.send('emp_master Get')
});
//C -- 로우를 추가 함.
router.post('/', function (req, res) {
  const hire = Date.now()
  const {
    emp_name,
    gender,
    age,
    dept_id
  } = req.body

  connection.query(`
  INSERT INTO emp_master (emp_name, gender, age, hire_date, dept_id) 
  VALUES('${emp_name}','${gender}', ${age}, ${hire}, ${dept_id})
  `, function (err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
  });
  res.status(200)
  res.send('asd')
});

const updateEmpMasterAge = function (age) {
  connection.query(`UPDATE emp_master SET age = ${age}`, function (err, rows, fields) {
    if (err) throw err;
    console.log('The changed table is: ', rows);
  });
}

//U -- age 값을 바꿈.
router.put('/', function (req, res) {
  updateEmpMasterAge(req.body.age)
  res.status(200)
  res.send('asd')
});

//D -- id 2 행 삭제
router.post('/', function (req, res) {
  const {
    id
  } = req.body

  connection.query(`DELETE from emp_master where ID = ${id}`, function (err, rows, fields) {
    if (err) throw err;
    console.log('The changed id: ', rows);
  });
  res.status(200)
  res.send('asd')
});

module.exports = router;