var db = require("../models");

let  newId;
module.exports = function(app){

  // Create a POST route to get data from signup
  app.post("/api/users", function(req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      userPassword: req.body.userPassword,
      userType: req.body.userType,
      userEmail: req.body.userEmail
    }).then(
      res.json({id: req.params.id})
    );
  });

  app.get("/api/users/", function(req, res){
    db.User.findAll({
      limit: 1,
      order: [
        ["id", "DESC"]
      ]
    }).then(function(result){
      // console.log(result[0].id);
      newId = result[0].id
      return res.json(result);
    });
  });

  app.put("/api/users/", function(req, res) {
    db.User.update({
      userPhoneNum: req.body.userPhoneNum,
      userAddress: req.body.userAddress,
      userCity: req.body.userCity,
      userState: req.body.userState,
      userZip: req.body.userZip,
      userGender: req.body.userGender,
      userBday: req.body.userBday
    },{
      where : {
        id: newId
      }
    }).then(function(data){
      console.log(data);
      return res.json(data);
    });
  });

  // Get all examples
  // app.get("/api/users", function (req, res) {
  //   db.User.findAll({}).then(function (dbUser) {
  //     res.json(dbUser);
  //     console.log("HERE" + res);
  //   });
  // });

};

    // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });