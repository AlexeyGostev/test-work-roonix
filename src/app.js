const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const workers = require('./routes/workers');

let app = express();

app.use(cors({ origin: '*'}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/workers', workers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return res.end('404');
});

// error handler
app.use(function(err, req, res, next) {
  return res.end('500');
});

module.exports = app;
