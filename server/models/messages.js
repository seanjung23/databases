var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = 'select messages.id, messages.text, messages.roomname users.username from messages left outer join users on (messages.userid = users.id order by messages.id desc';
    db.query(queryStr, function (err, results) => {
      callback(results);
    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    var queryStr = 'insert into messages(text, userid, roomname) values (?, (select id from users where username = ? limit 1), ?)';
    db.query(queryStr, params function (err, results) => {
      callback(results);
    });
  } // a function which can be used to insert a message into the database
};
