import { fetchCityData } from '../api';
import { endpoints } from '../endpoints';

const MOCK_CITY = 'London';
const MOCK_CITY_DATA = [{ lat: 51.51, lon: -0.13 }];

global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(MOCK_CITY_DATA)
});

describe('fetchCityData', () => {
  it('should fetch city data with the correct URL', async () => {
    await fetchCityData(MOCK_CITY);
    expect(fetch).toHaveBeenCalledWith(endpoints.cityData(MOCK_CITY));
  });

  it('should fetch correct city data for mock city', async () => {
    const data = await fetchCityData(MOCK_CITY);
    expect(data).toEqual(MOCK_CITY_DATA[0]);
  });

  it('should throw an error if fetching city data fails', async () => {
    const errorMessage = 'Failed to fetch city data';
    global.fetch = jest.fn().mockResolvedValue({ ok: false });
    
    try {
      await fetchCityData(MOCK_CITY);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(errorMessage);
    }
  });
});