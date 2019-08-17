var express = require('express');
var app = express();
var indexRouter = require('./routes');
var langlangRouter = require('./routes/langlang');
var empMasteRouter = require('./routes/emp_master');


// configuration ===============================================================
app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use('/', indexRouter);
app.use('/langlang', langlangRouter);
app.use('/emp_master', empMasteRouter);

//듣는자.
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});