import { validateCity } from '../utils';

describe('validateCity', () => {
  it('returns true for valid city names', () => {
    expect(validateCity('New York')).toEqual(true);
    expect(validateCity('Los Angeles')).toBe(true);
    expect(validateCity('San Francisco')).toBe(true);
    expect(validateCity('Hong Kong')).toBe(true);
    expect(validateCity('Wólka')).toBe(true)
  });

  it('returns false for invalid city names', () => {
    expect(validateCity('123')).toBe(false); 
    expect(validateCity('!@#$%')).toBe(false); 
    expect(validateCity('New_York')).toBe(false);
    expect(validateCity('')).toBe(false);
  });
});