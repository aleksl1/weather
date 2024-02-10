import React from 'react';
import renderer from 'react-test-renderer';
import NoWeatherInfo from '../NoWeatherInfo';

describe('NoWeatherInfo Component', () => {
  it('renders the component correctly', () => {
    const component = renderer.create(
      <NoWeatherInfo navigateToHome={() => {}} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls navigateToHome when "Go to Home" button is pressed', () => {
    const navigateToHomeMock = jest.fn();
    const component = renderer.create(
      <NoWeatherInfo navigateToHome={navigateToHomeMock} />
    );
    const pressable = component.root.findByProps({testID: 'go-to-home-button'});
    pressable.props.onPress();
    expect(navigateToHomeMock).toHaveBeenCalled();
  });
});
