// Header troca o background-color ao descer a pagina
const desiredElement = document.getElementById('header');
const pixelsAmount = '50';

window.addEventListener('scroll', function () {
  if (window.scrollY > pixelsAmount) {
    desiredElement.classList.add('changeStyle');
  } else {
    desiredElement.classList.remove('changeStyle');
  }
});