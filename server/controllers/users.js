var models = require("../models");

module.exports = {
  get: function (req, res) {
    //If using ORM solution
    User.findAll().complete(function (err, results) {
      res.json(results);
    });
    //If using models below is the solution
    // models.users.getAll(function (err, results) {
    //   res.json(results);
    // });
  },
  post: function (req, res) {
    //If using ORM solution
    User.create({ username: req.body[username] }).complete(function (
      err,
      user
    ) {
      res.sendStatus(201);
    });
    //If using models below is the solution
    // var params = [req.body[username]];
    // models.users.create(function (err, results) {
    //   res.json(results);
    // });
  },
};
