const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return res.end(404);
});

// error handler
app.use(function(err, req, res, next) {
  res.end(500);
});

module.exports = app;
