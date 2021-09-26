/* eslint-disable strict */
'use strict';

function burgerMenuAdd(event) {
  const leftMenu = document.querySelector('.left-menu');
  const target = event.target;
  const burgerMenu = document.querySelector('.burger-menu');

  if (target.matches(".mob-menu-btn") || target.matches(".mob-menu-btn span")) {
    if (burgerMenu && burgerMenu.matches(".close")) {
      leftMenu.classList.add('open');
      leftMenu.classList.remove('close');
    } else if (!burgerMenu) {
      leftMenu.classList.add('burger-menu');
      leftMenu.classList.remove('close');
      leftMenu.classList.add('open');
    } else {
      leftMenu.classList.remove('open');
      leftMenu.classList.add('close');
    }
  } else if (target.closest(".burger-menu")) {
    leftMenu.classList.add('open');
    leftMenu.classList.remove('close');
  } else if (leftMenu) {
    leftMenu.classList.add('close');
    leftMenu.classList.remove('open');
  }

}

export default burgerMenuAdd;
