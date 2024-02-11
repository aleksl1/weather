import { validateCityInput } from '../utils';

describe('validateCityInput', () => {
  it('returns error message when city is empty', () => {
    const city = '';
    const errorMessage = validateCityInput(city);
    expect(errorMessage).toBe('Please enter a city name to check the weather.');
  });

  it('returns error message when city is not valid', () => {
    const city = '123';
    const errorMessage = validateCityInput(city);
    expect(errorMessage).toBe('Please enter a valid city name.');
  });

  it('returns an empty string when city is valid', () => {
    const city = 'London';
    const errorMessage = validateCityInput(city);
    expect(errorMessage).toBe('');
  });
});
