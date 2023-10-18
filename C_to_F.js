function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius*9/5) +32;
    return fahrenheit;
  }
  

  let celsiusTemperature = 30;
  let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(celsiusTemperature + "°C is equal to " + fahrenheitTemperature + "°F");