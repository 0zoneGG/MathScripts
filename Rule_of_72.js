function calculateTimeAndValueToDouble(initialAmount, annualInterestRate) {
    var yearsToDouble = 72 / annualInterestRate;
    var futureValue = initialAmount * Math.pow(1 + (annualInterestRate / 100), yearsToDouble);
    return { yearsToDouble, futureValue };
  }
  
  // Example usage:
  var initialAmount = 500;
  var annualInterestRate = 6;
  
  var results = calculateTimeAndValueToDouble(initialAmount, annualInterestRate);
  
  console.log("At a " + annualInterestRate + '% ' + "intrest rate, your savings account will be worth");
  console.log(results.futureValue.toFixed(2) + " in " + results.yearsToDouble + " years." );
  