function convertTemperature() {
  var temperatureInput = document.getElementById("temperature").value;
  var unitInput = document.querySelector('input[name="unit"]:checked').value;
  var resultElement = document.getElementById("result");
  var convertedTemperature;
  var convertedUnit;

  if (unitInput === "celsius") {
    convertedTemperature = (parseFloat(temperatureInput) * 9) / 5 + 32;
    convertedUnit = "Fahrenheit";
  } else if (unitInput === "fahrenheit") {
    convertedTemperature = ((parseFloat(temperatureInput) - 32) * 5) / 9;
    convertedUnit = "Celsius";
  } else if (unitInput === "kelvin") {
    convertedTemperature = parseFloat(temperatureInput) - 273.15;
    convertedUnit = "Celsius";
  }

  resultElement.innerHTML =
    "Converted Temperature: " +
    convertedTemperature.toFixed(2) +
    " " +
    convertedUnit;
}
