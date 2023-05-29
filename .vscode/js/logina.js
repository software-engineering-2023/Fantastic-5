function login(event) {
    event.preventDefault(); // Prevent form submission and page refresh
  
    // Get the entered username and password
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var username = usernameInput.value;
    var password = passwordInput.value;
  
    // Perform validation (you can modify this based on your requirements)
    if (username === "tony" && password === "123456") {
      // Redirect to the user page with the username as a query parameter
      window.location.href = "usera.html?username=" + username;
    } else {
      alert("Invalid username or password. Please try again.");
      // Clear the input fields
      usernameInput.value = "";
      passwordInput.value = "";
      usernameInput.focus();
    }
  }