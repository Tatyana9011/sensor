/* eslint-disable strict */
'use strict';

import { getDataStorage } from "./localStorage.js";
import updateData from "./api/apiUser/updateData.js";
import routerNavigation from "./routerNavigation.js";
import sortBtn from "./createPage/createComponent/createTable/sortData/sortBtn.js";
import details from "./createPage/createComponent/userComponent/details.js";
import burgerMenu from './burgerMenu.js';
import getewaysPageDetails from "./createPage/createComponent/getewaysComponent/getewaysPageDetails.js";
import handleActiveTab from "./createPage/createComponent/userComponent/handleActiveTab.js";

export const addListener = event => {
  const name = getDataStorage('name');
  let token = '';

  if (name) {
    token = name.tokenValue;
  }

  const deleteBtn = document.getElementById('delete-button');
  const checkedTr = document.querySelectorAll('.row-table');
  const title = document.getElementById('title-page');
  const location = getDataStorage('location');
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

  if (target.matches('.link') || target.matches('.navigation-item') && !target.matches('.exit')) {
    const navigationItem = document.querySelectorAll('.navigation-item');
    let text = target.text;


    navigationItem.forEach(item => {
      const link = item.closest('.link');
      if (link) {
        link.classList.remove('active');
      }
      item.classList.remove('active');
    });

    if (target.matches('.link')) {
      const navItem = target.querySelector('.navigation-item');

      if (navItem) {
        console.log('navItem: ', navItem);
        navItem.classList.add('active');
        target.classList.add('active');
        text = navItem.text;
      }
    } else {
      target.classList.add('active');
      target.closest('.link').classList.add('active');
    }

    title.textContent = text;

    if (title.textContent === "Users") {
      const form = document.getElementById('updateUsers');
      updateData(form);
      return;
    }
    routerNavigation();
  }

  if (target.matches('.filter-button')) {
    const root = document.documentElement;
    const targetTranslateValue = event.target.dataset.translateValue;
    const form = document.getElementById('updateUsers');
    const filterButtons = document.querySelectorAll(".filter-button");
    const textContent = target.textContent;

    if (event.target.classList.contains("filter-button")) {
      handleActiveTab(filterButtons, event, "filter-active");
      root.style.setProperty("--translate-filters-slider", targetTranslateValue);
    }

    if (textContent === "Clients") {
      //updateData = (form, page = 1, portionNumber = 1, userType = 'CLIENT')
      updateData(form, 1, 1, "CLIENT");
      return;
    } else if (textContent === "Administrators") {
      updateData(form, 1, 1, "ADMIN");
      return;
    } else if (textContent === "External") {
      updateData(form, 1, 1, "EXTSYSTEM");
      return;
    }

  }


  if (target.matches('.emphasize')) {
    const emphasize = document.querySelectorAll('.emphasize');
    console.log('emphasize: ', emphasize);

    emphasize.forEach(item => {

      if (item.matches('.btnFilter')) {
        item.classList.remove('btnFilter');
      }

    });

    if (title.textContent === "Users") {

      sortBtn(target, getDataStorage('data'));

    } else if (title.textContent === "Timezones") {

      sortBtn(target, getDataStorage('timezones'));

    } else if (title.textContent === "Geteways") {

      sortBtn(target, getDataStorage('geteways'));

    }
  }

  if (target.matches('.avatar')) {
    console.log('-----------------target.matcheavatar');

    details(name.userId, token, target);

  } else if (target.matches('td') || target.matches('.img-avatar')) {
    console.log('------------target.matches td');
    const row = target.closest('tr');

    if (row) {
      if (location === "Users") {

        details(row.children[0].dataset.id, token, target);

      } else if (location === "Geteways") {

        getewaysPageDetails();

      }

    }

  }

  burgerMenu(event);
};

const eventListener = () => {

  document.addEventListener('click', addListener);

};

export default eventListener;
