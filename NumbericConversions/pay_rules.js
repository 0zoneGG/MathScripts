function calculateGrossPay(payRate, hoursWorked) {
    if (hoursWorked <= 40) {
      return payRate * hoursWorked;
    } else {
      let regularPay = payRate * 40;
      let overtimePay = (hoursWorked - 40) * (payRate * 1.5);
      return regularPay + overtimePay;
    }
  }
  
 
  let payRate = 17.30; 
  let hoursWorked = 45; 
  
  let grossPay = calculateGrossPay(payRate, hoursWorked);
  console.log("Gross Pay: $" + grossPay.toFixed(2));
  