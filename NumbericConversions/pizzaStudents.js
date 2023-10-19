const totalStudents = 20;
const pizzas = 8;
const slicesPerPizza = 8;

const totalSlices = pizzas * slicesPerPizza;
const slicesPerPerson = Math.floor(totalSlices / (totalStudents + 1));
const slicesLeftOver = totalSlices % (totalStudents + 1);

console.log("Each person, including you, gets " + slicesPerPerson + " slices.");
console.log("There are " + slicesLeftOver + " slices left over.");
