const button = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementsByTagName('nav')[0];

button.addEventListener('click', () => {
  nav.classList.toggle('active');
});