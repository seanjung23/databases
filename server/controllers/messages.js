var models = require("../models");

module.exports = {
  get: function (req, res) {
    //If using ORM solution
    Message.findAll({ include: [User] }).complete(function (err, results) {
      res.json(results);
    });
    //If using models below is the solution
    // models.messages.getAll(function (err, results) {
    //   res.json(results);
    // });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    //If using ORM solution
    User.findOrCreate({ username: req.body[username] }).complete(function (
      err,
      user
    ) {
      var params = {
        text: req.body[text],
        userid: user.id,
        roomname: req.body[roomname],
      };
      Message.create(params).complete(function (err, results) {
        res.sendStatus(201);
      });
    });
    //If using models below is the solution
    // var params = [req.body[text], req.body[username], req.body[roomname]];
    // models.messages.create(function (err, results) {
    //   res.json(results);
    // });
  }, // a function which handles posting a message to the database
};
