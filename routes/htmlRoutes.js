const db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index")
      });
  // Load user profile page
  app.get("/userp", function(req, res){
    res.render("userProfile")
    });
  // Load user view page
  app.get("/userv", function(req, res){
    res.render("userView")
  });
  // Load vendor profile page
  app.get("/vendorp", function(req, res){
    res.render("vendorProfile")
  })
  // Load 404 page
  app.get("/404", function(req, res){
    res.render("404")
  });
};


  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });

