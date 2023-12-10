//Connection using ORM
var Sequelize = require('Sequelize');
var orm = new Sequelize('chat', 'fred', 'fred');

var User = orm.define('User', {
  username: Sequelize.STRING
});

var Message = orm.define('Message', {
  text: Sequelize.STRING
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;

//If Connecting using models
// var mysql = require('mysql2');

// // Create a database connection and export it from this file.
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'chat'
// });
// // Confirm that the credentials supplied for the connection are correct.
// // On your personal computer supply the correct credentials for your mySQL account -- likely
// // user: 'root', password: ''
// // OR
// // user: 'root', password: 'some_password_you_created_at_install'
// connection.connect();
// module.exports = connection;