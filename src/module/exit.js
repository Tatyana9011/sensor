/* eslint-disable strict */
'use strict';

import { removeDataStorage } from './localStorage.js';
import creatLoginPage from './createPage/creatLoginPage.js';
import random from './api/random.js';
import burgerMenu from './burgerMenu.js';
import { addListener } from './eventListener.js';

const exit = () => {

  const sensor = document.querySelector('.sensor');
  const wrapper = document.querySelector('.wrapper');

  setTimeout(() => {
    removeDataStorage('name');
    removeDataStorage('URL');
    removeDataStorage('userType');
    removeDataStorage('location');
  }, 0);

  setTimeout(() => {
    if (sensor) {
      sensor.remove();
    }
    document.removeEventListener('click', addListener);
    document.removeEventListener('click', burgerMenu);

    wrapper.innerHTML = ``;
    wrapper.append(creatLoginPage());
    random();
  }, 100);

};


export default exit;
