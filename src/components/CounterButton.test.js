import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

test('should render counter button component', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

test('should increase the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find("[id='counter']").simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find("[id='counter']").simulate('keypress');
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props().color).toEqual('red');
});

test('should not rerender', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.setState({ count: 1 });
  expect(wrapper.state()).toEqual({ count: 1 });
});
