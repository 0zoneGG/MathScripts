function circleArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    return area;
  }
  
 
  var radius = 5; 
  var area = circleArea(radius);
  console.log("The area of the circle is: " + area);
  