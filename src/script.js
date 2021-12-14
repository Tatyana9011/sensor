/* eslint-disable strict */
'use strict';

import { examinationDataStorage, getDataStorage } from './module/localStorage.js';
import creatSensorPage from './module/createPage/creatSensorPage.js';
import routerNavigation from './module/routerNavigation.js';
import updateData from './module/api/apiUser/updateData.js';
import checkResponse from './module/checkResponse.js';
import websocket from './module/websocket/websocket.js';
import exit from './module/exit.js';
import toggleNavBar from './module/createPage/createComponent/createTable/toggleNavBar.js';
import updateDataType from './module/createPage/createComponent/userComponent/updateDataType.js';
import addPhotoUsers from './module/api/apiUser/addPhotoUsers.js';
import modal from './module/modal.js';

const wrapper = document.querySelector('.wrapper');
window.addEventListener('resize', checkResponse);

if (!examinationDataStorage()) {
  exit();
} else {

  wrapper.append(creatSensorPage());
  const sensor = document.querySelector('.sensor');
  sensor.append(modal());
  const titlePage = document.getElementById('title-page');
  const form = document.getElementById('updateUsers');
  const location = getDataStorage('location');
  addPhotoUsers(form);

  if (location) {
    const wrapperRow = document.querySelector('.wrapper-row');
    const navigationItem = document.querySelectorAll('.navigation-item');
    wrapperRow.style.cssText = `height:${document.documentElement.clientHeight}px`;

    navigationItem.forEach(item => {
      item.classList.remove('active');
      const link = item.closest('.link');
      if (link) {
        link.classList.remove('active');
      }

      if (item.textContent === location) {
        item.classList.add('active');
        if (link) {
          link.classList.add('active');
        }
      }
    });

    if (location === 'Users') {
      titlePage.textContent = 'Users';
      toggleNavBar();
      updateDataType();
    }
    if (location === 'Timezones') {
      titlePage.textContent = 'Timezones';
      routerNavigation();
    }
    if (location === 'Geteways') {
      titlePage.textContent = 'Geteways';
      routerNavigation();
    }
    if (location === 'Sensor categories') {
      titlePage.textContent = 'Sensor categories';
      routerNavigation();
    }
    if (location === 'Logging') {
      titlePage.textContent = 'Logging';
      routerNavigation();
    }
    if (location === 'Tools') {
      titlePage.textContent = 'Tools';
      routerNavigation();
    }

  } else {

    updateData(form);
  }

  websocket(getDataStorage('URL'));

}

















