const movieCount = () => {
  const home = document.querySelector('#home');
  const count = home.childElementCount;
  return count;
};

export default movieCount;