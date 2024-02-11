import React from 'react';
import renderer, { act } from 'react-test-renderer';
import HomeScreen from '../HomeScreen';

jest.mock('@react-native-async-storage/async-storage', () => ({
  useAsyncStorage: jest.fn(() => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  })),
}));

const mockNavigation = {
  navigate: jest.fn(),
};

describe('HomeScreen', () => {
  it('updates city state when user types into input field', () => {
    const component = renderer.create(<HomeScreen navigation={mockNavigation}/>);
    const input = component.root.findByProps({ testID: 'city-input' });

    act(() => {
      input.props.onChangeText('New York');
    });

    expect(input.props.value).toBe('New York');
  });
});
