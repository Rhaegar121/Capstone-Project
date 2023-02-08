/** @jest-environment jsdom */
import countComments from '../modules/commentCounter.js';

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

describe('count comment of a particular movie', () => {
  test('should return an array with 8 objects', () => {
    expect(countComments(movies)).toEqual(3);
  });
});