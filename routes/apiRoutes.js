var db = require("../models");

let  newId;
module.exports = function(app){

  // Create a POST route to get data from signup
  app.post("/api/users", function(req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userPassword: req.body.userPassword,
      userType: req.body.userType,
      userEmail: req.body.userEmail
<<<<<<< HEAD
    }).then(function (dbUser) {
      // console.log("apiRoutes----" + res.body)
      res.json(dbUser);
    });
=======
    }).then(
      res.json({id: req.params.id})
    );
>>>>>>> master
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

  app.put("/api/users/", function (req, res) {
    db.User.update({
      userName: req.body.userName,
      userPhoneNum: req.body.userPhoneNum,
      userAddress: req.body.userAddress,
      userCity: req.body.userCity,
      userState: req.body.userState,
      userZip: req.body.userZip,
      userGender: req.body.userGender,
      userBday: req.body.userBday
<<<<<<< HEAD
    }).then(function (dbUser) {
      res.json(dbUser);
=======
    },{
      where : {
        id: newId
      }
    }).then(function(data){
      console.log(data);
      return res.json(data);
>>>>>>> master
    });
  });

  // Get all examples
  // app.get("/api/users", function (req, res) {
  //   db.User.findAll({}).then(function (dbUser) {
  //     res.json(dbUser);
  //     console.log("HERE" + res);
  //   });
  // });
<<<<<<< HEAD
  // Delete an example by id
=======

};

    // Delete an example by id
>>>>>>> master
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  app.put("/api/checkintrucks/", function (req, res) {
    db.trucks.update({
      truckLive: req.body.truckLive,
    }, {
        where: {
          truckName: req.body.truckName
        }
      }).then(function (dbtrucks) {
        res.json(dbtrucks);
      });
    
  });
};






