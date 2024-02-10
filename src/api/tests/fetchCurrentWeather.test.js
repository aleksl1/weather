import { fetchCurrentWeather } from '../api';
import { endpoints } from '../endpoints';

const MOCK_CITY_DATA = { lat: 51.51, lon: -0.13 };
const MOCK_WEATHER_DATA = {
  current: {
    temp: 15,
    feels_like: 14,
    weather: [{ main: 'Clouds', description: 'scattered clouds', icon: '03d' }]
  }
};

global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(MOCK_WEATHER_DATA)
});

describe('fetchCurrentWeather', () => {
  it('should fetch current weather with the correct URL', async () => {
    await fetchCurrentWeather(MOCK_CITY_DATA);
    expect(fetch).toHaveBeenCalledWith(endpoints.currentWeather(MOCK_CITY_DATA));
  });

  it('should fetch correct current weather for mock city data', async () => {
    const data = await fetchCurrentWeather(MOCK_CITY_DATA);
    expect(data).toEqual(MOCK_WEATHER_DATA);
  });

  it('should throw an error if fetching current weather fails', async () => {
    const errorMessage = 'Failed to fetch current weather';
    global.fetch = jest.fn().mockResolvedValue({ ok: false });

    try {
      await fetchCurrentWeather(MOCK_CITY_DATA);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(errorMessage);
    }
  });
});