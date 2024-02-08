export type FetchCityDataResponse = {
  lat: number;
  lon: number;
}[];

type WeatherDescription = {
  main: string;
  description: string;
  icon: string;
}

export type FetchCurrentWeatherResponse = {
  current: {
    temp: number;
    feels_like: number;
    weather: WeatherDescription[];
}}
