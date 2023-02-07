const movieCount = async (count) => {
  const countMovie = document.querySelector('#counter');
  countMovie.innerHTML = `Number of Movies and Series: ${count}`;
  return countMovie;
};

export default movieCount;