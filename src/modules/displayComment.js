const getMovie = async (id) => {
    const movieUrl = `https://api.tvmaze.com/shows/${id}`;
    const response = await fetch(movieUrl);
    const data = await response.json();
    return data;
  };

  export default getMovie;