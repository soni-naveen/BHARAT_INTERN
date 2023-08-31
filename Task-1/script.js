const form = document.querySelector("form");
const input = document.getElementById("temp");
const option = document.getElementById("options");
const result = document.getElementById("result");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const temperature = input.value;
  const temperatureType = option.value;

  let convertedtemperature;
  if (temperatureType === "cel") {
    convertedtemperature = (temperature * (9 / 5) + 32).toFixed(2);
    result.textContent = `${temperature}°C = ${convertedtemperature}°F`;
    result.style.backgroundColor = "white";
  } else if (temperatureType === "fah") {
    convertedtemperature = ((temperature - 32) * (5 / 9)).toFixed(2);
    result.textContent = `${temperature}°F = ${convertedtemperature}°C`;
    result.style.backgroundColor = "white";
  }
  input.value = "";
});
