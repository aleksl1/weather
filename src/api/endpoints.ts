const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const endpoints = {
  cityData: (city:string ) => `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`,
  currentWeather: (lat: number, lon: number) =>  `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${API_KEY}&units=metric`
}