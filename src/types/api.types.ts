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

//extended types:

type LocalName = {
  [key: string]: string;
}

export type FetchCityDataExtendedResponse = {
  lat: number;
  lon: number;
  country: string;
  name: string;
  state:  string;
  local_names: LocalName[];
}[]


type CurrentWeatherDataType = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: WeatherDescription[];
  wind_deg: number;
  wind_speed: number;

}

export type DailyWeatherDataType = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  summary: string;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  uvi: number;
  weather: WeatherDescription[];
  wind_deg: number;
  wind_speed: number;
}



export type FetchWeekWeatherResponse = {
  daily: DailyWeatherDataType[];
  timezone: string;
  lat: number;
  lon: number;
  timezone_offset: number;
}