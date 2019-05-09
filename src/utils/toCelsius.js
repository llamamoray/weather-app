export default function toCelsius(kelvin, decimalPlaces = 1) {
  const inCelsius = kelvin - 273.15;
  return inCelsius.toFixed(decimalPlaces);
}