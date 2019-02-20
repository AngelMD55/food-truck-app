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
    }).then(
      res.json({id: req.params.id})
    );
  });

  //Route to get info from users table api
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

  // Route to update users table api
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
    },{
      where : {
        id: newId
      }
    }).then(function(data){
      console.log(data);
      return res.json(data);
    });
  });

  // POST route to create trucks api table
  app.post("/api/trucks", function(req, res) {
    db.Truck.create({
      truckName: req.body.truckName,
      priceRange: req.body.priceRange,
      // userName: req.body.userName,
      // foodCategory1: req.body.foodCategory1,
      // foodCategory2: req.body.foodCategory2,
      // foodCategory3: req.body.foodCategory3
    }).then(
      res.json({id: req.params.id})
    );
  });

    // Route to update truck table api
  app.put("/api/users/", function (req, res) {
    db.User.update({
      // userName: req.body.userName,
      userPhoneNum: req.body.userPhoneNum,
      userAddress: req.body.userAddress,
      userCity: req.body.userCity,
      userState: req.body.userState,
      userZip: req.body.userZip,
      // userGender: req.body.userGender,
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






