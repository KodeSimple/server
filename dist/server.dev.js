"use strict";

var http = require('http');

var app = require('./app');

var mongoose = require('mongoose');

var PORT = process.env.PORT || 8000;
var MONGO_URL = 'mongodb+srv://jsiroy:zRY1e6nXvffKn9AW@cluster0.ptiwiey.mongodb.net/pos?retryWrites=true&w=majority';
var server = http.createServer(app);
mongoose.connection.once('open', function () {
  console.log('MongoDB connected');
});
mongoose.connection.on('error', function (err) {
  console.log(err);
});

function startServer() {
  return regeneratorRuntime.async(function startServer$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(MONGO_URL));

        case 3:
          server.listen(PORT, function () {
            console.log("Server is listening at http://localhost:".concat(PORT));
          });
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

startServer();