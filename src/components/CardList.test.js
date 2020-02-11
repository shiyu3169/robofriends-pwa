import { shallow } from 'enzyme';
import React from 'react';
import CarList from './CardList';

test('should render card list component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Doe',
      username: 'john123',
      email: 'john@gmail.com'
    }
  ];
  expect(shallow(<CarList robots={mockRobots} />)).toMatchSnapshot();
});
