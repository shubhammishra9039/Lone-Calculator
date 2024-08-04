function payment() {
  let amount = document.getElementById("Amount").value;
  let rate = document.getElementById("Rate").value;
  let time = document.getElementById("Time").value;



  let monthlyRate = rate / (12 * 100);
  let numberOfMonths = time * 12;

  let emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / 
  (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
 
 
  document.getElementById("result").innerHTML=`${emi.toFixed(2)}`
}
