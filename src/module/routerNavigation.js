/* eslint-disable strict */
'use strict';

import { init } from "./init.js";
import getewaysPage from "./createPage/getewaysPage.js";
import getewaysModelsPage from "./createPage/getewaysModelsPage.js";
import sensorCategoriesPage from "./createPage/sensorCategoriesPage.js";
import loggingPage from "./createPage/loggingPage.js";
import toolsPage from './createPage/toolsPage.js';
import addHeadTable from "./createPage/createComponent/createTable/addHeadTable.js";
import createTable from "./createPage/createComponent/createTable/createTable.js";
import inputGroupSearch from "./createPage/createComponent/createTable/inputGroupSearch.js";
import sendFormTimezones from "./api/apiTimezones/sendFormTimezones.js";
import { getDataStorage, saveDataJSON } from "./localStorage.js";


function routerNavigation(data) {
  console.log('data: ', data);
  console.log('----------------------------routerNavigation: ');

  const content = document.querySelector('.content');
  const titlePage = document.getElementById('title-page');

  if (titlePage.textContent === "Users") {

    saveDataJSON('location', 'Users');

    const arrClass = ['col-sm-12', 'col-xl-12', 'mb-5', 'pe-xl-5', 'pe-md-4', 'px-sm-3'];
    const addTextHead = ['#', `<input id='removeAll' type="checkbox"></input>`,
      'Photo', 'Login', 'Created', 'Updated'];
    const arr = [0, 0, 0, 1, 1, 1];
    const titleSearch = ['Login', 'Created', 'Updated'];
    const dataAtr = ['', '', '', 'login', 'created', 'updated'];

    content.innerHTML = '';

    const usersTable = createTable(arrClass);
    content.append(usersTable);

    const tableHead = document.querySelector('thead');
    tableHead.append(addHeadTable(addTextHead, dataAtr, arr));

    const newData = data ? data : getDataStorage('data');

    init(newData);
    inputGroupSearch(titleSearch, newData);

  }

  if (titlePage.textContent === "Geteways") {
    saveDataJSON('location', 'Geteways');
    content.innerHTML = '';
    const geteways = getewaysPage();
    content.append(geteways);

  }
  if (titlePage.textContent === "Gateway models") {
    saveDataJSON('location', 'Gateway models');
    content.innerHTML = '';
    const getewaysModal = getewaysModelsPage();
    content.append(getewaysModal);

  }
  if (titlePage.textContent === "Sensor categories") {
    saveDataJSON('location', 'Sensor categories');
    content.innerHTML = '';
    const sensorCategories = sensorCategoriesPage();
    content.append(sensorCategories);

  }
  if (titlePage.textContent === "Timezones") {
    saveDataJSON('location', 'Timezones');
    content.innerHTML = '';
    sendFormTimezones();
  }

  if (titlePage.textContent === "Logging") {
    saveDataJSON('location', 'Logging');

    content.innerHTML = '';
    const logging = loggingPage();
    content.append(logging);

  }
  if (titlePage.textContent === "Tools") {
    saveDataJSON('location', 'Tools');

    content.innerHTML = '';
    const tools = toolsPage();
    content.append(tools);

  }

}

export default routerNavigation;
