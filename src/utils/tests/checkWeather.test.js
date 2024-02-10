import { checkWeather } from '../utils';
import { fetchCityData, fetchCurrentWeather } from "../../api/api";

jest.mock("../../api/api", () => ({
  fetchCityData: jest.fn(),
  fetchCurrentWeather: jest.fn()
}));

const MOCK_CITY = 'London';
const MOCK_CITY_DATA = { lat: 51.51, lon: -0.13 };
const MOCK_WEATHER_DATA = {
  current: {
    temp: 15,
    feels_like: 14,
    weather: [{ main: 'Clouds', description: 'scattered clouds', icon: '03d' }]
  }
};

describe('checkWeather', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return weather data for a valid city', async () => {
    fetchCityData.mockResolvedValue(MOCK_CITY_DATA);
    fetchCurrentWeather.mockResolvedValue(MOCK_WEATHER_DATA);

    const result = await checkWeather(MOCK_CITY);

    expect(fetchCityData).toHaveBeenCalledWith(MOCK_CITY);
    expect(fetchCurrentWeather).toHaveBeenCalledWith(MOCK_CITY_DATA.lat, MOCK_CITY_DATA.lon);
    expect(result).toEqual(MOCK_WEATHER_DATA);
  });

  it('should return null if city data cannot be fetched', async () => {
    fetchCityData.mockResolvedValue(null);

    const result = await checkWeather(MOCK_CITY);

    expect(fetchCityData).toHaveBeenCalledWith(MOCK_CITY);
    expect(fetchCurrentWeather).not.toHaveBeenCalled();
    expect(result).toEqual(null);
  });

  it('should return null if weather data cannot be fetched', async () => {
    fetchCityData.mockResolvedValue(MOCK_CITY_DATA);
    fetchCurrentWeather.mockResolvedValue(null);

    const result = await checkWeather(MOCK_CITY);

    expect(fetchCityData).toHaveBeenCalledWith(MOCK_CITY);
    expect(fetchCurrentWeather).toHaveBeenCalledWith(MOCK_CITY_DATA.lat, MOCK_CITY_DATA.lon);
    expect(result).toEqual(null);
  });
});
