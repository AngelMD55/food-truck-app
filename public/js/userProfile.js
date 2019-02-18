$(document).ready(function () {
  let user;

  $("#signUpSubmit").on("click", function (event) {
    event.preventDefault();
    //Creating object to pass to database
    let newUserSignUp = {
      firstName: $("#userFirstName").val().trim(),
      lastName: $("#userLastName").val().trim(),
      userPassword: $("#password").val().trim(),
      userType: $("input[name='type']:checked").val(),
      userEmail: $("#userEmail").val().trim()
    }
    console.log(newUserSignUp);
    $.ajax({
      method: "POST",
      url: "/api/users",
      data: newUserSignUp
    }).done(function (msg) {
      alert("Data Saved")
      window.location.href = "/userp";
    });
  });

  // function getID(){
  //   $.get("/api/users", function(data){
  //     user = data;
  //     console.log(user)
  //   })
  // }

  // getID();

  $("#userSubmit").on("click", function(event){
    event.preventDefault();
    
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
    console.log(updateUserInfo);
    $.ajax({
      method: "PUT",
      url: "/api/users/",
      data: updateUserInfo
    }).then(function(){
      window.location.href = "/userv";
    })
  })
});