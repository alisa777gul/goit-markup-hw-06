const btnClose = document.querySelector('.close-bt');
const btnOpen = document.querySelector('.icon-menu-open');
const menu = document.querySelector('.mob-menu');
const btnOrder = document.querySelector('.button-order');
const modal = document.querySelector('.modal-overlay');
const btnModalClose = document.querySelector('.button-modal');
const mobNavLinks = document.querySelectorAll('.mob-navigation-item');
const navLinks = document.querySelectorAll('.navigation-element');
const subscribe = document.querySelector('.form-button');
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(item => item.classList.remove('current'));
    this.classList.add('current');
  });
});

btnOpen.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.add('is-open');
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.remove('is-open');
});

mobNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
});

btnOrder.addEventListener('click', () => {
  modal.classList.add('is-open');
  header.classList.add('under');
});

btnModalClose.addEventListener('click', () => {
  modal.classList.remove('is-open');
  header.classList.remove('under');
});

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});

subscribe.addEventListener('click', e => {
  e.preventDefault();

  const emailInput = document.querySelector('.email-class');

  if (emailInput.value.trim() !== '') {
    alert('Thank you for subscribing!');

    emailInput.value = '';
  } else {
    alert('Please enter a valid email!');
  }
});
