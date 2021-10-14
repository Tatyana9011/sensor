/* eslint-disable strict */
'use strict';

import exit from './exit.js';


const btnExit = () => {
  const navigationItemExit = document.querySelector('.exit');

  navigationItemExit.addEventListener('click', exit);

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
