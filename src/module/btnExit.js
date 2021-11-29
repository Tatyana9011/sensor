/* eslint-disable strict */
'use strict';

import exit from './exit.js';
import { disconnectExit, stompClient } from './websocket/websocket.js';

const btnExit = () => {
  const navigationItemExit = document.querySelector('.exit');

  if (navigationItemExit) {
    navigationItemExit.addEventListener('click', event => {
      event.preventDefault();
      exit();
      disconnectExit(stompClient);
    });
  }

};

export default btnExit;
