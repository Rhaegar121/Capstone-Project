import getData from './getData.js';
import getMovie from './displayComment.js';

const displayData = async () => {
    const home = document.querySelector('#home');
    const dataArray = await getData();
    dataArray.forEach((data, index) => {
      const dataCard = document.createElement('div');
      dataCard.classList.add('container');
      dataCard.innerHTML = `<img src="${data.image.medium}" alt="${data.name}">
      <div class="caption">
      <span class="title">${data.name}</span>
      <i class="fa-regular fa-heart"></i>
      </div>
      <button id="film${index}">Comments</button>
      <button>Reservations</button>`;

      home.appendChild(dataCard);

      const movieBtn = document.getElementById(`film${index}`)
      movieBtn.addEventListener('click', async () => {
        console.log('hello world')
        const comment = document.querySelector('.comment');
        comment.classList.remove('hide')
        const movie = await getMovie(data.id);
        comment.innerHTML = `
        <div class="image">
            <img src="${data.image.original}" id="picture" alt="${data.name}">
            <span class="material-symbols-outlined close" id="closeBtn${index}">
                close
                </span>
        </div>
        <h2>${data.name}</h2>
        <div class="properties">
            <div>Language: ${data.language}</div>
            <div>Average Rating: ${data.rating.average}</div>
            <div>Type: ${data.type}</div>
            <div>Date produced: ${data.premiered}</div>
            <div>Genres: ${data.genres[0], data.genres[1]}</div>
            <div>Summary: ${data.summary}</div>
        </div>
        <h3>Comments (2)</h3>
        <div class="comments">
            <p>03/11/2021 Alex: I'd love it!</p>
            <p>03/12/2021 Mia: I love</p>
        </div>
        <h4>Add a comment</h4>
        <form action="">
            <div><input type="text" id="name" placeholder="Your name"></div>
            <div><textarea type="text" id="comments" placeholder="Your insights" maxlength="500"></textarea></div>
            <button type="submit" class="Btn">Comment</button>
        </form>`;

        const closeMovie = document.querySelector('#closeBtn${index}');
        closeMovie.addEventListener('click', () => comment.classList.add('hide'));
      })
    });
};

export default displayData;