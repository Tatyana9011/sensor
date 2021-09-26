/* eslint-disable strict */
'use strict';
import creatSensorPage from "../creatSensorPage.js";
import { saveDataJSON } from "../localStorage.js";
import routerNavigation from '../routerNavigation.js';

const resultEnd = data => {
  console.log('resultEnd: ');

  const login = document.querySelector('.login');
  const wrapper = document.querySelector('.wrapper');
  const modalBackdrop = document.querySelector('.modal-backdrop');

  saveDataJSON('data', JSON.parse(data));

  if (login) {
    login.remove();
  }

  if (modalBackdrop) {
    modalBackdrop.remove();
  }

  wrapper.innerHTML = '';
  wrapper.append(creatSensorPage());
  routerNavigation();
};

export default resultEnd;
