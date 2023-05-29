function payCreditCardBill() {
    
    var creditCardNumber = document.getElementById("credit-card-number").value;
    var amount = document.getElementById("amount").value;
    if(amount<=100000){
      if(amount<0){
        alert("negative amount!!!!!")
      }
      else{
    alert("Payment of " + amount + " EGP made for credit card " + creditCardNumber);}
    }
    
    else{
      alert("you do not have enough money")
    }
  }
  