//jeff palmer
function submit(){
  var userEntered = document.getElementById("user").value;
  //var passEntered = document.getElementById("pass").value;
  window.alert("Username: " + userEntered + " Password: " + passEntered);
}

function validateUsername(){
  var userEntered = document.getElementById("user").value;

  //  The username must be at least 6 characters long - tested and works
  if (userEntered.length < 6) {
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameError").innerHTML="Username must contain at least 6 letters..";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
  }
  // Username must NOT contain any spaces - tested and works
  else if (!(/^\S{3,}$/.test(userEntered))) {
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameError").innerHTML="Username must not contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
  }
  else {
      //green
      document.getElementById("usernameGroup").classList.remove("has-error");
      document.getElementById("usernameGroup").classList.add("has-success");

  }
}

function validatePassword(){
  var passEntered = document.getElementById("pass").value;
  // Password must NOT be the same as the Username - tested and works
  if (passEntered == userEntered) {
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordError").innerHTML="You cannot have a password the same as a username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  // Password must be between 6-20 characters - tested and works.
  if (passEntered.length < 6 || passEntered.length > 20) {
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordError").innerHTML="Your password length is invalid. Please choose a password between 6 and 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  // Password must NOT be the word "password" regardless of (upper-/lower-) case used tested and works
  if (passEntered.toLowerCase() == "password") {
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordError").innerHTML="Password cannot contain any combination of Upper/Lower containing the word password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
    else {
      // green
      document.getElementById("passwordGroup").classList.remove("has-error");
      document.getElementById("passwordGroup").classList.add("has-success");
    }
  }
