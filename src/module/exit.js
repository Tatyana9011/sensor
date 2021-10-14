/* eslint-disable strict */
'use strict';

import { removeDataStorage } from './localStorage.js';
import creatLoginPage from './createPage/creatLoginPage.js';
import authorization from './authorization.js';
import burgerMenu from './burgerMenu.js';


const exit = () => {

  const sensor = document.querySelector('.sensor');
  const wrapper = document.querySelector('.wrapper');

  setTimeout(() => {
    removeDataStorage('name');
    removeDataStorage('URL');
    removeDataStorage('data');
    removeDataStorage('timezones');
    removeDataStorage('newData');
    removeDataStorage('location');
  }, 0);

  setTimeout(() => {
    sensor.remove();
    document.removeEventListener('click', burgerMenu);
    wrapper.append(creatLoginPage());
    authorization();
  }, 100);

};


export default exit;
