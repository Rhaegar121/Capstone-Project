const movieCount = (movie) => {
  let count = 0;
  for (let i = 0; i < movie.length; i += 1) {
    count += 1;
  } return count;
};

export default movieCount;