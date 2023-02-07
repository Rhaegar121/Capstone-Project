import { baseUrl } from './api.js';

const getData = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

const getMovie = async (id) => {
  const movieUrl = `${baseUrl}/${id}`;
  const response = await fetch(movieUrl);
  const data = await response.json();
  return data;
};

export { getData, getMovie };