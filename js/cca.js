// Send a reply to the technical report
function sendReply(reportId) {
    var replyInput = document.getElementById("reply-input-" + reportId);
    var replyText = replyInput.value.trim();
    if (replyText !== "") {
      // Perform the necessary action to send the reply
      console.log("Sending reply for report: " + reportId);
      console.log("Reply: " + replyText);
      // Clear the reply input field
      replyInput.value = "";
  
      // Display an alert message
      alert("Reply sent successfully!");
    }
  }