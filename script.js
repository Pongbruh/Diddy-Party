const mapBtn = document.querySelector('.map-btn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close');

mapBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
