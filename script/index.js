const button = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementsByTagName('nav')[0];

button.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const joinButton = document.querySelector('.join');
joinButton.addEventListener('click', () => {
  const ip = 'redevenus.co';
  const port = '10004';
  const textToCopy = `${ip}:${port}`;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      const dialog = document.querySelector('.dialog');
      dialog.classList.add('show');

      setTimeout(() => {
        dialog.classList.remove('show');
      }, 4000);
    })
    .catch(err => {
      console.error('Erro ao copiar para a área de transferência: ', err);
    });
});