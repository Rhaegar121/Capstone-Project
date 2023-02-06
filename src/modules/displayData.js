import getData from './getData.js';

const displayData = async () => {
  try {
    const home = document.querySelector('#home');
    const dataArray = await getData();
    dataArray.forEach((data) => {
      const dataCard = document.createElement('div');
      dataCard.classList.add('container');
      dataCard.innerHTML = `<img src="${data.image.medium}" alt="${data.name}">
      <div class="caption">
      <span class="title">${data.name}</span>
      <i class="fa-regular fa-heart"></i>
      </div>
      <button>Comments</button>
      <button>Reservations</button>`;
      return home.appendChild(dataCard);
    });
  } catch (errorMsg) {
    throw new Error(errorMsg);
  }
};

export default displayData;