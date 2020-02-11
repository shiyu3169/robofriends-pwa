import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import { setSearchField } from './actions';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  };
  test('should return the initial state', () => {
    expect(reducers.searchRobots()).toEqual(initialStateSearch);
  });

  test('should handle CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, setSearchField('abc'))
    ).toEqual({
      searchField: 'abc'
    });
  });
});

describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false
  };

  test('should return the initial state', () => {
    expect(reducers.requestRobots()).toEqual(initialStateRobots);
  });

  test('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      isPending: true
    });
  });

  test('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '123',
            name: 'test',
            email: 'test@gmail.com'
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: '123',
          name: 'test',
          email: 'test@gmail.com'
        }
      ],
      isPending: false
    });
  });

  test('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'Error 500'
      })
    ).toEqual({
      robots: [],
      error: 'Error 500',
      isPending: false
    });
  });
});
