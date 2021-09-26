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

function routerNavigation() {
  console.log('routerNavigation: ');

  const content = document.querySelector('.content');
  const titlePage = document.getElementById('title-page');

  if (titlePage.textContent === "Users") {

    const arrClass = ['col-sm-12', 'col-xl-12', 'mb-5', 'pe-xl-5', 'pe-md-4', 'px-sm-3'];
    const addTextHead = ['#', `<input id='removeAll' type="checkbox"></input>`,
      'Login', 'Photo', 'Created', 'Updated'];

    content.innerHTML = '';

    const usersTable = createTable(arrClass);
    content.append(usersTable);
    const tableHead = document.querySelector('thead');
    tableHead.append(addHeadTable(addTextHead));

    init();

  }
  if (titlePage.textContent === "Geteways") {

    content.innerHTML = '';
    const geteways = getewaysPage();
    content.append(geteways);

  }
  if (titlePage.textContent === "Gateway models") {

    content.innerHTML = '';
    const getewaysModal = getewaysModelsPage();
    content.append(getewaysModal);

  }
  if (titlePage.textContent === "Sensor categories") {

    content.innerHTML = '';
    const sensorCategories = sensorCategoriesPage();
    content.append(sensorCategories);

  }
  if (titlePage.textContent === "Timezones") {

    content.innerHTML = '';

  }
  if (titlePage.textContent === "Logging") {

    content.innerHTML = '';
    const logging = loggingPage();
    content.append(logging);

  }
  if (titlePage.textContent === "Tools") {

    content.innerHTML = '';
    const tools = toolsPage();
    content.append(tools);

  }

}

export default routerNavigation;
