
  function goToLoginPage() {
    location.href = 'login.html';
  }
  var registeredUsers = [];
  function validateForm() {
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // alert("Registration successful");
    
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all the required fields.');
      return false;
    }
      else {
    // Register the user
    registeredUsers.push({ username: username, password: password });
    console.log(registeredUsers[0])
    alert("Registration successful");
    goToLoginPage();
  }
    
    
    goToLoginPage();
    return false; 

  }


 
 
