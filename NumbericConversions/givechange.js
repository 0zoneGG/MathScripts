const customerChange = 72;

const quaters = Math.floor(customerChange / 25);
const dimes = Math.floor((customerChange % 25) / 10);
const nickles = Math.floor(((customerChange % 25) %10 ) / 5);
const pennies = ((customerChange % 25) % 10) %5;

console.log("quaters: " + quaters);
console.log("dimes: " + dimes);
console.log("nickles: " + nickles);
console.log("pennies: " + pennies);