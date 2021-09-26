/* eslint-disable strict */
'use strict';

import authorization from './module/authorization.js';
import { examinationDataStorage } from './module/localStorage.js';
import creatLoginPage from './module/creatLoginPage.js';
import creatSensorPage from './module/creatSensorPage.js';
import routerNavigation from './module/routerNavigation.js';
import burgerMenu from './module/burgerMenu.js';
import updateData from './module/api/updateData.js';
import sendFormTimezones from './module/api/sendFormTimezones.js';

const wrapper = document.querySelector('.wrapper');
const sensor = document.querySelector('.sensor');

document.addEventListener('click', event => {
  const deleteBtn = document.getElementById('delete-button');
  const checkedTr = document.querySelectorAll('.row-table');
  const title = document.getElementById('title-page');
  const target = event.target;
  let count = 0;

  if (checkedTr) {
    checkedTr.forEach(item => {
      if (item.checked) {
        return count++;
      }
    });

    if (count <= 0 && deleteBtn) {
      deleteBtn.setAttribute('disabled', 'true');
    } else if (deleteBtn) {
      deleteBtn.removeAttribute('disabled');
    }
  }

  if (target.matches('.navigation-item')) {
    const navigationItem = document.querySelectorAll('.navigation-item');
    const link = target.text;

    title.textContent = link;
    navigationItem.forEach(item => {
      item.classList.remove('active');
      target.classList.add('active');
    });

    const titlePage = document.getElementById('title-page');
    if (titlePage.textContent === "Users") {
      const form = document.getElementById('updateUsers');
      updateData(form);
    }
    if (titlePage.textContent === "Timezones") {
      sendFormTimezones();
    }
    routerNavigation();
  }

  burgerMenu(event);
});

if (!examinationDataStorage()) {
  if (sensor) {
    sensor.remove();
  }

  wrapper.append(creatLoginPage());
  authorization();

} else {

  wrapper.append(creatSensorPage());
  const form = document.getElementById('updateUsers');

  updateData(form);
}


















