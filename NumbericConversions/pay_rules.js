var payRate = 10; 
var hoursWorked = 45; 

var regularPay = (hoursWorked <= 40) ? payRate * hoursWorked : payRate * 40;
var overtimePay = (hoursWorked > 40) ? (hoursWorked - 40) * (payRate * 1.5) : 0;

var grossPay = regularPay + overtimePay;

console.log("Regular Pay: $" + regularPay.toFixed(2));
console.log("Overtime Pay: $" + overtimePay.toFixed(2));
console.log("Gross Pay: $" + grossPay.toFixed(2));
