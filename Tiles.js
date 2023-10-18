function calculateTileBoxesNeeded(length, width, bufferPercent) {

    let totalArea = length * width;
    let tilesNeeded = Math.ceil(totalArea / 12);
    let boxesNeeded = Math.ceil(tilesNeeded / 12);
    let boxesToBuy = Math.ceil(boxesNeeded * (1 + bufferPercent / 100));
  
    return { boxesNeeded, boxesToBuy };
  }
  
  
  let roomLength = 20; 
  let roomWidth = 18;   
  let bufferPercent = 10; 
  
  let results = calculateTileBoxesNeeded(roomLength, roomWidth, bufferPercent);
  
  console.log("You need " + results.boxesNeeded + " boxes of tiles.");
  console.log("To be safe, you should buy " + results.boxesToBuy + " boxes of tiles with a " + bufferPercent + "% buffer.");
  