/* eslint-disable strict */
'use strict';

import { removeDataStorage } from './localStorage.js';
import creatLoginPage from './creatLoginPage.js';
import authorization from './authorization.js';

const btnExit = () => {
  const navigationItemExit = document.querySelector('.exit');

  navigationItemExit.addEventListener('click', event => {
    event.preventDefault();
    const sensor = document.querySelector('.sensor');
    const wrapper = document.querySelector('.wrapper');

    setTimeout(() => {
      removeDataStorage('name');
      removeDataStorage('URL');
      removeDataStorage('data');
    }, 0);

    setTimeout(() => {
      sensor.remove();
      wrapper.append(creatLoginPage());
      authorization();
    }, 100);

  });

  navigationItemExit.addEventListener('mousemove', () => {
    const img = navigationItemExit.querySelector('img');
    img.style.cssText = `filter: brightness(5)`;
  });

  navigationItemExit.addEventListener('mouseout', () => {
    const img = navigationItemExit.querySelector('img');
    img.style.cssText = `filter: invert(1);`;
  });


};

export default btnExit;
