var express = require('express');
var router = express.Router();
const langlang = require('../controllers/langlang')

/* GET users listing. */
//R -- LANGLAGN테이블을 볼 수 있음.
router.get('/', function (req, res) {
  const total = langlang.getTotalAge()
  res.status(200)
  res.json({
    total
  })
});

//C -- 로우를 추가 함.
router.post('/', function (req, res) {
  const {
    name,
    age,
    birth
  } = req.body

  connection.query(`INSERT INTO LANGLANG (name, age, birth) VALUES('${name}', ${age}, '${birth}')`, function (err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
  });
  res.status(200)
  res.send('asd')
});

const updateLangLangAge = function (age) {
  connection.query(`UPDATE LANGLANG SET age = ${age}`, function (err, rows, fields) {
    if (err) throw err;
    console.log('The changed table is: ', rows);
  });
}

//U -- age 값을 바꿈.
router.put('/', function (req, res) {
  updateLangLangAge(req.body.age)
  res.status(200)
  res.send('asd')
});

//D -- id 2 행 삭제
router.delete('/', function (req, res) {
  connection.query('DELETE from LANGLANG where ID = 2', function (err, rows, fields) {
    if (err) throw err;
    console.log('The changed table is: ', rows);
  });
  res.status(200)
  res.send('asd')
});

module.exports = router;