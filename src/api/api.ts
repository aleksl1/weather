import { FetchCityDataResponse, FetchCurrentWeatherResponse } from "../types/api.types";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const fetchCurrentWeather = async (lat: number, lon: number) => {
 try {
    const response = await fetch(
       `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${API_KEY}&units=metric`
    );
    if(!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data:FetchCurrentWeatherResponse = await response.json();
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
}

export const fetchCityData = async (city: string) => {
 try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    if(!response.ok) {
      throw new Error('Failed to fetch city data');
    }
    const data: FetchCityDataResponse = await response.json();
    return data[0];
  } catch (error: any) {
    console.log(error.message);
  }
}

export const getIconUri = (icon: string) => `http://openweathermap.org/img/wn/${icon}.png`;



