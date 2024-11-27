const btnClose = document.querySelector('.close-bt');
const btnOpen = document.querySelector('.icon-menu-open');
const menu = document.querySelector('.mob-menu');
const btnOrder = document.querySelector('.button-order');
const modal = document.querySelector('.modal-overlay');
const btnModalClose = document.querySelector('.button-modal');

btnOpen.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.add('is-open');
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.remove('is-open');
});

btnOrder.addEventListener('click', () => {
  modal.classList.add('is-open');
});

btnModalClose.addEventListener('click', () => {
  modal.classList.remove('is-open');
});
