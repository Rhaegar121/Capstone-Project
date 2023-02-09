/** @jest-environment jsdom */
import { baseUrl } from '../modules/api.js';

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
  {
    id: 4,
    title: 'Wolf',
  },
];

global.fetch = () => Promise.resolve({
  json: () => Promise.resolve(movies),
});

describe('count movies on the home page', () => {
  test('number of movies should be 4', async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    expect(data.length).toEqual(4);
  });
});