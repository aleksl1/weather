import { FetchCityDataResponse, FetchCurrentWeatherResponse } from "../types/api.types";
import { endpoints } from "./endpoints";

export const fetchCurrentWeather = async (lat: number, lon: number) => {
 try {
    const response = await fetch(
       endpoints.currentWeather(lat, lon)
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
      endpoints.cityData(city)
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

export const getIconUri = (icon: string) => endpoints.icon(icon);



