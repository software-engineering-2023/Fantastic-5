function setReminder(billType) {
    var receivedReminders = document.getElementById("received-reminders");
    var reminderItem = document.createElement("li");
    reminderItem.textContent = "Payment reminder for " + billType + " bill";
    receivedReminders.appendChild(reminderItem);
  }