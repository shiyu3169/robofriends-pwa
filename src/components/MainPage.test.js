import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

test('should render main page component', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should filter robots correctly with empty robots', () => {
  expect(wrapper.instance().filterRobots()).toEqual([]);
});

test('should filter robots correctly with given search field', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 3, name: 'john', email: 'john@gmail.com' }],
    searchField: 'john',
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([
    { id: 3, name: 'john', email: 'john@gmail.com' }
  ]);
});

test('should filter robots correctly with given search field and empty robots', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: 'john',
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([]);
});

test('should show loading', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: 'john',
    isPending: true
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2).toMatchSnapshot();
});
