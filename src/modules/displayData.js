import {
  getData, getLike, getMovie, pushLike,
} from './util.js';
import movieCount from './movieCounter.js';

const displayData = async () => {
  const home = document.querySelector('#home');
  // fetching the likes from the API
  const allLikes = await getLike();
  // fetching the movie data from the API
  const dataArray = await getData();
  // looping through the array
  dataArray.forEach((data, index) => {
    // filtering the like for the movie id
    const likes = allLikes.filter((like) => like.item_id === data.id);
    // creating a new div element
    const dataCard = document.createElement('div');
    dataCard.classList.add('container');
    dataCard.innerHTML = `<img src="${data.image.medium}" alt="${data.name}">
    <div class="caption">
    <span class="title">${data.name}</span>
    <i class="fa-regular fa-heart"></i>
    </div>
    <p id="like">${likes.length > 0 ? likes[0].likes : 0} Likes</p>
    <button id="film${index}">Comments</button>
    <button>Reservations</button>`;
    home.appendChild(dataCard);

    // updating likes on the home page
    const likeBtn = dataCard.querySelector('.fa-heart');
    likeBtn.onclick = () => {
      const like = dataCard.querySelector('#like');
      pushLike(data.id);
      like.innerHTML = `${likes[0].likes + 1} Likes`;
    };

    // counting movies
    const countMovie = document.querySelector('#counter');
    countMovie.innerHTML = `Number of Movies and Series: ${movieCount(dataArray)}`;

    // opening comment popup page
    const movieBtn = document.getElementById(`film${index}`);
    movieBtn.addEventListener('click', async () => {
      const comment = document.querySelector('.comment');
      comment.classList.remove('hide');
      const movie = await getMovie(data.id);
      comment.innerHTML = `
      <div class="comment-container">
        <div class="image">
            <img src="${movie.image.original}" id="picture" alt="${movie.name}">
            <span class="material-symbols-outlined close" id="closeBtn${index}">
                close
                </span>
        </div>
        <h2>${movie.name}</h2>
        <div class="properties">
            <div><b>Language:</b> ${movie.language}</div>
            <div><b>Average Rating:</b> ${movie.rating.average}</div>
            <div><b>Type:</b> ${movie.type}</div>
            <div><b>Date produced:</b> ${movie.premiered}</div>
            <div><b>Genres:</b> ${movie.genres[0]}, ${movie.genres[1]}</div>
            <div><b>Summary:</b> ${movie.summary}</div>
        </div>
        <h3>Comments (2)</h3>
        <div class="comments">
            <p>03/11/2021 Alex: I'd love it!</p>
            <p>03/12/2021 Mia: I love</p>
        </div>
        <h4>Add a comment</h4>
        <form action="post">
            <div><input type="text" id="name" placeholder="Your name"></div>
            <div><textarea type="text" id="comments" placeholder="Your insights" maxlength="500"></textarea></div>
            <button type="submit" class="Btn">Comment</button>
        </form>
      </div>`;
      const closeMovie = document.querySelector(`#closeBtn${index}`);
      closeMovie.addEventListener('click', () => comment.classList.add('hide'));
    });
  });
};

export default displayData;