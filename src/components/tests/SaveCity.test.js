import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import SaveCity from '../SaveCity';

jest.mock('@react-native-async-storage/async-storage', () => ({
  useAsyncStorage: jest.fn(() => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  })),
}));

describe('SaveCity Component', () => {
  let component;
  let setItemMock;
  let removeItemMock;
  let getItemMock;

  beforeEach(() => {
    getItemMock = jest.fn();
    setItemMock = jest.fn();
    removeItemMock = jest.fn().mockResolvedValue();
    useAsyncStorage.mockReturnValue({
      getItem: getItemMock,
      setItem: setItemMock,
      removeItem: removeItemMock,
    });
    component = renderer.create(
      <SaveCity city="London" onClear={() => {}}  />
    );
  });

  it('renders the component correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls setItem when "Save City" button is pressed', async () => {
    const saveCityButton = component.root.findByProps({testID: "save-city-button" });
    await act(async () => {
      saveCityButton.props.onPress();
    });
    expect(setItemMock).toHaveBeenCalled();
  });

  it('calls removeItem and onClear when "Remove City" button is pressed', async () => {
    const onClearMock = jest.fn();
    component.update(<SaveCity city="London" onClear={onClearMock} />);
    const clearCityButton = component.root.findByProps({testID: "clear-city-button" });
    await act(() => {
      clearCityButton.props.onPress();
    });
    expect(removeItemMock).toHaveBeenCalled()
    expect(onClearMock).toHaveBeenCalled();
  });
  

  it('renders Save City button disabled when city is not provided', () => {
    component = renderer.create(
      <SaveCity city="" onClear={() => {}} />
    );
    const saveCityButton = component.root.findByProps({ testID: "save-city-button" });
    expect(saveCityButton.props.disabled).toBe(true);
  });

  it('renders Save City button enabled when city is provided', () => {
    component.update(<SaveCity city="London" onClear={() => {}} />);
    const saveCityButton = component.root.findByProps({ testID: "save-city-button" });
    expect(saveCityButton.props.disabled).toBe(false);
  });
})