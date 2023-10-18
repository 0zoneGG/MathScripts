function calculateVansNeeded(passengers, seatsPerVan) {
    return Math.ceil(passengers / seatsPerVan);
  }
  
  function calculateVanRentalCost(vansNeeded, costPerVan) {
    return vansNeeded * costPerVan;
  }
  
  function calculateCostPerPerson(totalCost, totalPassengers) {
    return totalCost / totalPassengers;
  }
  
  let totalPassengers = 38;
  let seatsPerVan = 15;
  let costPerVan = 250;
  
  let vansNeeded = calculateVansNeeded(totalPassengers, seatsPerVan);
  let totalCost = calculateVanRentalCost(vansNeeded, costPerVan);
  let costPerPerson = calculateCostPerPerson(totalCost, totalPassengers);
  
  console.log("You need " + vansNeeded + " charter vans for 38 people.");
  console.log("The total cost to rent the vans is: $" + totalCost);
  console.log("The cost per person is: $" + costPerPerson.toFixed(2));
  