var registeredUsers = [];
function goToLoginPage() {
    location.href = 'login.html';
  }
function validateForm() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
    alert('Please fill in all the required fields.');
    return false;
  } else {
    registeredUsers.push({ username: username, password: password });
    alert("Registration successful");
    location.href = "login.html";
   // return true;
  }
}
