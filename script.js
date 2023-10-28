function validateForm() {
  var username = document.forms["registrationForm"]["username"].value;
  var password = document.forms["registrationForm"]["password"].value;
  var email = document.forms["registrationForm"]["email"].value;

  // Simple validation checks
  if (username == "") {
    alert("Username must be filled out");
    return false;
  }
  if (password == "") {
    alert("Password must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
}