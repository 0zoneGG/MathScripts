var monthlySalary = 500; 
var taxRate = 23;
var taxWithheld = (taxRate / 100) * monthlySalary;

console.log("Federal taxes withheld: $" + taxWithheld.toFixed(2));
