

console.log(registeredUsers[0])
function login(event) {
    event.preventDefault(); 
  
    
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var username = usernameInput.value;
    var password = passwordInput.value;
  
    
    if (username === "tony" && password === "123456") {
      
      window.location.href = "user.html?username=" + username;
    } else {
      alert("Invalid username or password. Please try again.");
      
      usernameInput.value = "";
      passwordInput.value = "";
      usernameInput.focus();
    }
  


  }
// function login(event) {
//   event.preventDefault(); 

//   var usernameInput = document.getElementById("username");
//   var passwordInput = document.getElementById("password");
//   var username = usernameInput.value;
//   var password = passwordInput.value;

//   var user = registeredUsers.find(function(user) {
//     return user.username === username && user.password === password;
//   });

//   if (user) {
//     window.location.href = "user.html?username=" + username;
//   } else {
//     alert("Invalid username or password. Please try again.");
//     usernameInput.value = "";
//     passwordInput.value = "";
//     usernameInput.focus();
//   }
// }


