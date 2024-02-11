import { fetchCityData, fetchCurrentWeather } from "../api/api";

export const checkWeather = async (city: string) => {
  try {
    const cityData = await fetchCityData(city);
    if (!cityData || !cityData.lat || !cityData.lon) {
      alert(`Failed to get data for ${city}. Make sure the city name is correct.`);
      throw new Error(
        "Failed to get data for the city!"
      );
    }
    const { lat, lon } = cityData;
    const weatherData = await fetchCurrentWeather(lat, lon);
    if (!weatherData) {
      throw new Error("Failed to get weather data!");
    }
    return weatherData;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
};

export const displayTemperature = (temp: number) => {
  if (isNaN(temp) || temp === null) {
    return 'N/A';
  }
  return `${Math.round(temp)}°C`
};

export const validateCity = (city: string) => {
  const cityNameRegex = /^[\p{L}\s-]+$/u;
  return cityNameRegex.test(city)
;}

export const validateCityInput = (city: string) => {
  if (!city) return "Please enter a city name to check the weather.";
  const isValid = validateCity(city);
  if (!isValid) return "Please enter a valid city name.";
  return ""
;}
