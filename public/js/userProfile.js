$(document).ready(function () {
  let user;
  let firstName;
  let lastName;
  let userPassword;
  let userType;
  let userEmail;

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
    $.ajax({
      method: "POST",
      url: "/api/users",
      data: newUserSignUp
    }).then(function () {
      alert("wait");
      if(newUserSignUp.userType === "eater"){
      window.location.replace("/userp");
      }else{
        window.location.replace("/vendorp")
      }
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
      userName : $("#userName").val().trim(),
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