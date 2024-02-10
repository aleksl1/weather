import { displayTemperature } from '../utils';

describe('displayTemperature', () => {
  it('should return a string with rounded temperature and unit', () => {
    expect(displayTemperature(20)).toEqual('20°C');
    expect(displayTemperature(20.5)).toEqual('21°C');
    expect(displayTemperature(20.1)).toEqual('21°C');
    expect(displayTemperature(20.9)).toEqual('21°C');
    expect(displayTemperature(0)).toEqual('0°C');
    expect(displayTemperature(-10)).toEqual('-10°C');
  });

  it('should return "N/A" if temperature is not a number', () => {
    expect(displayTemperature('abc')).toEqual('N/A');
    expect(displayTemperature(null)).toEqual('N/A');
    expect(displayTemperature(undefined)).toEqual('N/A');
    expect(displayTemperature({})).toEqual('N/A');
  });
});
