function goToHomePage() {
    var confirmation = confirm("Are you sure you want to close your account?");
    if (confirmation) {
      window.location.href = "close.html";
    }
  }