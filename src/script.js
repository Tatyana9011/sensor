/* eslint-disable strict */
'use strict';

import authorization from './module/authorization.js';
import { examinationDataStorage, getDataStorage } from './module/localStorage.js';
import creatLoginPage from './module/createPage/creatLoginPage.js';
import creatSensorPage from './module/createPage/creatSensorPage.js';
import routerNavigation from './module/routerNavigation.js';
import burgerMenu from './module/burgerMenu.js';
import updateData from './module/api/apiUser/updateData.js';
import checkResponse from './module/checkResponse.js';
import sortBtn from './module/createPage/createComponent/createTable/sortData/sortBtn.js';
import addPhoto from './module/createPage/createComponent/userComponent/addPhoto.js';

const wrapper = document.querySelector('.wrapper');
const sensor = document.querySelector('.sensor');
window.addEventListener('resize', checkResponse);

document.addEventListener('click', event => {
  const deleteBtn = document.getElementById('delete-button');
  const checkedTr = document.querySelectorAll('.row-table');
  const title = document.getElementById('title-page');
  const target = event.target;
  console.log('target: ', target);
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

  if (target.matches('.navigation-item') && !target.matches('.exit')) {
    const navigationItem = document.querySelectorAll('.navigation-item');
    const link = target.text;

    title.textContent = link;
    navigationItem.forEach(item => {
      item.classList.remove('active');
      target.classList.add('active');
    });


    if (title.textContent === "Users") {
      const form = document.getElementById('updateUsers');
      updateData(form);
      return;
    }
    routerNavigation();
  }

  if (target.matches('.emphasize')) {
    const emphasize = document.querySelectorAll('.emphasize');

    emphasize.forEach(item => {

      if (item.matches('.btnFilter')) {
        item.classList.remove('btnFilter');
      }

    });

    if (title.textContent === "Users") {

      //sortBtn(target, getDataStorage('data'));

    } else if (title.textContent === "Timezones") {

      sortBtn(target, getDataStorage('timezones'));

    }
  }

  if (target.matches('.img-avatar')) {
    const row = target.closest('tr');
    const data = getDataStorage('name');
    const token = data.tokenValue;

    if (row) {
      addPhoto(row.children[0].dataset.id, token, target);
    } else if (target.matches('.img-avatar') && target.matches('.avatar')) {
      addPhoto(data.userId, token, target);
    }
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

  const titlePage = document.getElementById('title-page');
  const form = document.getElementById('updateUsers');

  if (getDataStorage('location')) {

    if (getDataStorage('location') === 'Users') {
      titlePage.textContent = 'Users';

      updateData(form);

    }
    if (getDataStorage('location') === 'Timezones') {
      titlePage.textContent = 'Timezones';
      routerNavigation();
    }

  } else {

    updateData(form);

  }



}


















