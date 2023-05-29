function transferMoney() {
  
    var accountNumber = document.getElementById("account-number").value;
    var amount = document.getElementById("amount").value;
    var transferType = document.getElementById("transfer-type").value;
  
    if(amount<=100000){
      if(amount<0){
        alert("negative amount!!!!!")
      }
      else{
    alert("Payment of " + amount + " EGP made for account " + accountNumber);}
    }
 
else{
  alert("you don not have enough money")
}
}
  