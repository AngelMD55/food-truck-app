$(document).ready(function() {
  $("#userSubmit").on("click", function(event){
    event.preventDefault();

    //Need Validation for empty fields
    let newUser = {
        firstName: $("#userFirstName").val().trim(),
        lastName: $("#userLastName").val().trim(),
        userName: "NEED DISPLAYED FORM",
        userPassword: "NEED DISPLAYED FORM",
        userType: "NEED DISPLAYED FORM",
        userPhoneNum: "NEED DISPLAYED FORM",
        userEmail: $("#userEmail").val().trim(),
        userAddres: $("#userAddress").val().trim(),
        userCity: $("#userCity").val().trim(),
        userState: $("#userState").val().trim(),
        userZipCode: $("#userZip").val().trim(),
        userGender: $("#userGender").val(),
        userBday: $("#birthDate").val().trim()
    }

    console.log(newUser);
    })
});