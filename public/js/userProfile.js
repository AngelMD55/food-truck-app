$(document).ready(function () {
  let user;
  let firstName;
  let lastName;
  let userPassword;
  let userType;
  let userEmail;

  // get route to get api data
  function getID() {
    $.get("/api/allusers", function (data) {
      // console.log(data[1].userName)
      user = data
    })
  }

  getID();

  //onclick function for login
  $("#login").on("click", function (event) {
    event.preventDefault();

    let loginUser = $("#loginUser").val().trim();
    let loginPassword = $("#loginPassword").val().trim();

    if (loginUser == "") {
      alert("Please enter email or user name")
      $("#loginUser").focus();
      return false;
    }

    if (loginPassword == "") {
      alert("Please enter password")
      $("#loginPassword").focus();
      return false;
    }

    if (loginUser != "" && loginPassword != "") {

      for (let i = 0; i < user.length; i++) {

        if (loginUser === user[i].userName && loginPassword === user[i].userPassword){
          window.location.replace("/userv/" + user[i].id);
          break;
          
        }else if($("#divlogin").is(":hidden")){          
          $("#divlogin").removeClass("hidden").addClass("visible")
        }

      }
    }
  })



  // onclick function to get values from users input
  $("#signUpSubmit").on("click", function (event) {
    event.preventDefault();

    //Passing values to variables
    firstName = $("#userFirstName").val().trim(),
      lastName = $("#userLastName").val().trim(),
      userPassword = $("#password").val().trim(),
      userType = $("input[name='type']:checked").val(),
      userEmail = $("#userEmail").val().trim()

    //Creating object to pass to database
    let newUserSignUp = {
      firstName: firstName,
      lastName: lastName,
      userPassword: userPassword,
      userType: userType,
      userEmail: userEmail
    }
    console.log(newUserSignUp.userType);
    //ajax to create users table
    $.ajax({
      method: "POST",
      url: "/api/users",
      data: newUserSignUp
    }).then(function (res) {
      if (newUserSignUp.userType === "eater") {
        window.location.replace("/userp/" + res.id);
      } else {
        window.location.replace("/vendorp/" + res.id);
      }
    });
  });

  // onclick function to get values from user input and update database
  $("#userSubmit").on("click", function (event) {
    event.preventDefault();
    console.log("Running")
    let updateUserInfo = {
      userName: $("#userName").val().trim(),
      userPhoneNum: $("#userPhoneNum").val().trim(),
      userAddress: $("#userAddress").val().trim(),
      userCity: $("#userCity").val().trim(),
      userState: $("#userState").val().trim(),
      userZip: $("#userZip").val().trim(),
      userGender: $("input[name='gender']:checked").val(),
      userBday: $("#birthDate").val().trim(),
    }
    // console.log(updateUserInfo);
    $.ajax({
      method: "PUT",
      url: "/api/users/" + $("#id").val(),
      data: updateUserInfo
    }).then(function (res) {
      window.location.replace("/userv/" + $("#id").val());
    })
  })

  //on click function to create truck table and update user table
  $("#vendorSubmit").on("click", function (event) {
    event.preventDefault();

    //Getting food category 

    let allFoodCategories = document.querySelectorAll('input[name="foodCategory"]:checked');
    let foodCategories = [];

    for (let i = 0; i < allFoodCategories.length; i++) {
      foodCategories.push(allFoodCategories[i].value);
    }

    console.log(foodCategories);
    console.log("foodCat1 " + foodCategories[0]);

    let updateTruckUserInfo = {
      userPhoneNum: $("#truckPhoneNum").val().trim(),
      userAddress: $("#truckUserAdress").val().trim(),
      userCity: $("#truckCity").val().trim(),
      userState: $("#truckState").val().trim(),
      userZip: $("#truckZip").val().trim(),
      userGender: $("input[name='vgender']:checked").val(),
      userBday: $("#birthDateVendor").val().trim(),
      userName: $("#vUserName").val().trim()
    }

    let newTruckVendor = {
      truckName: $("#truckName").val().trim(),
      truckDescription: $("#vendorDescription").val(),
      foodCategory1: foodCategories[0],
      foodCategory2: foodCategories[1],
      foodCategory3: foodCategories[2],
      userName: $("#vUserName").val().trim()
    }
    console.log(newTruckVendor);

    $.ajax({
      method: "POST",
      url: "/api/trucks",
      data: newTruckVendor,
    }).then(function () {
      $.ajax({
        method: "PUT",
        url: "/api/truckusers/" + $("#idv").val(),
        data: updateTruckUserInfo
      }).then(function (res) {
        window.location.replace("/vendorv/" + $("#idv").val())
      });
    });
  });

  $("#vendorDescription").keyup(function () {
    $("#count").text("Characters left: " + (540 - $(this).val().length));
  });
});