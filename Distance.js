var x1 = 3;
var y1 = 4; 
var x2 = 7; 
var y2 = 10; 

var deltaX = x2 - x1;
var deltaY = y2 - y1;

var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

console.log("The distance between the two points is: " + distance.toFixed(2));
