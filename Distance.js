function calculateDistance(x1, y1, x2, y2) {
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return distance;
  }

  let x1 = 2;
  let y1 = 3;
  let x2 = 5;
  let y2 = 7;
  
  let distance = calculateDistance(x1, y1, x2, y2);
  console.log("The distance between the two points is: " + distance);
  