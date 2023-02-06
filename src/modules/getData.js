const getData = async () => {
  const baseUrl = 'https://api.tvmaze.com/shows';
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

export default getData;