/** @jest-environment jsdom */
import { baseUrl } from '../modules/api.js';

const comments = [
  {
    date: '2023-2-9',
    username: 'Barry',
    comment: 'Wonderful movie!',
  },
  {
    date: '2023-2-9',
    username: 'Barry',
    comment: 'Wonderful movie!',
  },
  {
    date: '2023-2-9',
    username: 'Barry',
    comment: 'Wonderful movie!',
  },
];

global.fetch = () => Promise.resolve({
  json: () => Promise.resolve(comments),
});

describe('count comment of a particular movie', () => {
  test('number of comments should be 3', async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    expect(data.length).toEqual(3);
  });
});