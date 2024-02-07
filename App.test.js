import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  //example unit test
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  //snapshot test
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
