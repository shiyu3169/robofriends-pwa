import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

test('should render card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
