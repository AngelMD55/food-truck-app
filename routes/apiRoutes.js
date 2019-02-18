var db = require("../models");

module.exports = function (app) {

  // Create a POST route to get data from signup
  app.post("/api/users", function (req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userPassword: req.body.userPassword,
      userType: req.body.userType,
      userEmail: req.body.userEmail
    }).then(function(dbUser) {
      // console.log("apiRoutes----" + res.body)
      res.json(dbUser);
    });
  });

  // app.get("/api/users/", function(req, res){
  //   db.User.findAll({
  //     limit: 1,
  //     order: ["id", "DESC"]
  //   }).then(function(){
  //     console.log("res-------- " + res);
  //     console.log("id" + res.id);
  //   });
  // });

  app.put("/api/users/", function(req, res) {
    db.User.update({
      userName: req.body.userName,
      userPhoneNum: req.body.userPhoneNum,
      userAddress: req.body.userAddress,
      userCity: req.body.userCity,
      userState: req.body.userState,
      userZip: req.body.userZip,
      userGender: req.body.userGender,
      userBday: req.body.userBday
      }).then(function (dbUser) {
        res.json(dbUser);
      });
  });
};
  // Get all examples
  // app.get("/api/trucks", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });
    // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });