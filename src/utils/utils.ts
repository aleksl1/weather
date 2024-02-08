import { fetchCityData, fetchCurrentWeather } from "../api/api";

export const checkWeather = async (city: string) => {
  const cityData = await fetchCityData(city);
  if (!cityData) {
    return alert("Failed to get data for the city! Please try again later.");
  }
  const { lat, lon } = cityData;
  const weatherData = await fetchCurrentWeather(lat, lon);
  if (!weatherData) {
    return alert("Failed to get weather data! Please try again later.");
  }
  return weatherData;
};