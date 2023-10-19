var roomLength = 12; 
var roomWidth = 10;  
var tilesPerBox = 12;
var bufferPercent = 10; 

var totalArea = roomLength * roomWidth;
var tilesNeeded = Math.ceil(totalArea);
var boxesNeeded = Math.ceil(tilesNeeded / tilesPerBox);
var boxesToBuy = Math.ceil(boxesNeeded * (1 + bufferPercent / 100));

console.log("You need " + boxesNeeded + " boxes of tiles.");
console.log("To be safe, you should buy " + boxesToBuy + " boxes of tiles with a " + bufferPercent + "% buffer.");
