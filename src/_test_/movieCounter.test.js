/** @jest-environment jsdom */
import movieCount from '../modules/movieCounter.js';

const movies = [
  {
    id: 1,
    title: 'Arrow',
  },
  {
    id: 2,
    title: 'Flash',
  },
  {
    id: 3,
    title: 'Supernatural',
  },
];

describe('count movies on the home page', () => {
  test('should return an arry with 4 objects', () => {
    expect(movieCount(movies)).toEqual(3);
  });
});