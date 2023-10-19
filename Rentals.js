var totalPassengers = 38;
var seatsPerVan = 15;
var costPerVan = 250;

var vansNeeded = Math.ceil(totalPassengers / seatsPerVan);

var totalCost = vansNeeded * costPerVan;

var costPerPerson = totalCost / totalPassengers;

console.log("You need " + vansNeeded + " charter vans for 38 people.");
console.log("The total cost to rent the vans is: $" + totalCost);
console.log("The cost per person is: $" + costPerPerson.toFixed(2));
