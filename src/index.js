import './style.css';
import displayData from './modules/displayData.js';
import picture from './images/picture.jpg';

window.onload = () => {
  displayData();
};

const image = document.getElementById('picture');
image.src = picture;
