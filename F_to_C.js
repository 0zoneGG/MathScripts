function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  

  var fahrenheitTemperature = 68;
  var celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
  console.log(fahrenheitTemperature + "°F is equal to " + celsiusTemperature + "°C");
  