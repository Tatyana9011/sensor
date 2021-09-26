/* eslint-disable strict */
'use strict';

function checkResponse() {
  const leftMenu = document.querySelector('.left-menu');
  if (document.documentElement.clientWidth < 990) {
    leftMenu.classList.add('burger-menu');
    leftMenu.classList.add('close');
  } else {
    leftMenu.classList.remove('burger-menu');
  }
}

export default checkResponse;
