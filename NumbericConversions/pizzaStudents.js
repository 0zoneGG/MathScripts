const totalStudents = 20;
const totalPizzas = 4;
const slicesPerPizza = 8;

const totalSlices = totalPizzas * slicesPerPizza;
const slicesPerPerson = Math.floor(totalSlices / (totalStudents + 1));
const slicesLeftOver = totalSlices % (totalStudents + 1);

console.log("Each person, including you, gets " + slicesPerPerson + " slices.");
console.log("There are " + slicesLeftOver + " slices left over.");
