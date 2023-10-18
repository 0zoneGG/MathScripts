function calculateFederalTax(salary, taxRate) {
    let taxWithheld = salary * (taxRate / 100);
    return taxWithheld;
  }
  
  let monthlySalary = 550;
  let taxRate = 23;
  let taxWithheld = calculateFederalTax(monthlySalary, taxRate);
  console.log("The federal tax withheld is: $" + taxWithheld.toFixed(2));
  