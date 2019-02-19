$(document).ready(function () {
  let user;
  let firstName;
  let lastName;
  let userName;
  let userPassword;
  let userType;
  let userEmail;

  $("#signUpSubmit").on("click", function (event) {
    event.preventDefault();

    //Passing values to variables
    firstName = $("#userFirstName").val().trim(),
    lastName = $("#userLastName").val().trim(),
    userName = $("#userName").val().trim(),
    userPassword = $("#password").val().trim(),
    userType = $("input[name='type']:checked").val(),
    userEmail = $("#userEmail").val().trim()

    //Creating object to pass to database
    let newUserSignUp = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      userPassword: userPassword,
      userType: userType,
      userEmail: userEmail
    }
    console.log(newUserSignUp);
    $.ajax({
      method: "POST",
      url: "/api/users",
      data: newUserSignUp
    }).then(function () {
      window.location.replace("/userp");
    });
  });

  function getID(){
    $.get("/api/users", function(data){
      user = data;
    })
  }

  getID();

  $("#userSubmit").on("click", function (event) {
    event.preventDefault();

    let updateUserInfo = {
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
      url: "/api/users/",
      data: updateUserInfo
    }).then(function (data) {
      window.location.replace(`/userv/${data.id}`);
    })
  })
});