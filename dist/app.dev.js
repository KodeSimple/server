"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var app = express(); // const os = require('os');
// const username = os.userInfo().username;
// console.log(username);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000'
})); // Middleware logger

app.use(function (req, res, next) {
  var start = Date.now();
  next();
  var delta = Date.now() - start;
  console.log("".concat(req.method, " ").concat(req.baseUrl).concat(req.url, " ").concat(delta, "ms"));
});
app.use('/users', require('./routes/users.router')); // http://localhost:8080/users

module.exports = app;