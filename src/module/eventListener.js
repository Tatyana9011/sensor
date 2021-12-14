/* eslint-disable strict */
'use strict';

import { getDataStorage, saveDataJSON } from "./localStorage.js";
import updateData from "./api/apiUser/updateData.js";
import routerNavigation from "./routerNavigation.js";
import sortBtn from "./createPage/createComponent/createTable/sortData/sortBtn.js";
import details from "./createPage/createComponent/userComponent/details.js";
import burgerMenu from './burgerMenu.js';
import getewaysPageDetails from "./createPage/createComponent/getewaysComponent/getewaysPageDetails.js";
import handleActiveTab from "./createPage/createComponent/userComponent/handleActiveTab.js";
import typeDefinition from "./createPage/createComponent/userComponent/typeDefinition.js";
import toggleNavBar from "./createPage/createComponent/createTable/toggleNavBar.js";
import updateDataType from "./createPage/createComponent/userComponent/updateDataType.js";
import state from "./include/state.js";
import editUser from "./createPage/createComponent/userComponent/editUser.js";

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
    const filtersWrapper = document.querySelector('.filters-wrapper');
    if (filtersWrapper) {
      filtersWrapper.remove();
    }

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
      toggleNavBar();
      updateDataType();
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
      handleActiveTab(filterButtons, event.target, "filter-active");
      root.style.setProperty("--translate-filters-slider", targetTranslateValue);
    }

    if (textContent) {
      saveDataJSON('userType', typeDefinition(textContent));
      updateData(form, 1, 1, typeDefinition(textContent));
      return;
    }

  }


  if (target.matches('.emphasize')) {
    const emphasize = document.querySelectorAll('.emphasize');

    emphasize.forEach(item => {

      if (item.matches('.btnFilter')) {
        item.classList.remove('btnFilter');
      }

    });

    if (title.textContent === "Users") {

      sortBtn(target, state.usersData);

    } else if (title.textContent === "Timezones") {

      sortBtn(target, state.timezonesData);

    } else if (title.textContent === "Geteways") {

      sortBtn(target, state.getewaysData);

    }
  }

  if (target.matches('.avatar')) {
    console.log('-----------------target.matcheavatar');

    details(name.userId, token, target);

  } else if (target.matches('td') || target.matches('.img-avatar')) {

    const row = target.closest('tr');

    if (row) {
      if (location === "Users") {

        details(row.children[0].dataset.id, token, target);

      } else if (location === "Geteways") {

        getewaysPageDetails();

      }

    }

  }

  if (target.matches('#edit')) {
    editUser();
  }

  burgerMenu(event);
};

const eventListener = () => {

  document.addEventListener('click', addListener);

};

export default eventListener;
