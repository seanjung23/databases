var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = '';
    db.query(queryStr, function (err, results) => {
      callback(results);
    });
  },
  create: function (params, callback) {
    var queryStr = 'insert into users(username) values(?)';
    db.query(queryStr, params function (err, results) => {
      callback(results);
    });
  }
};
