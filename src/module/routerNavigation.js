/* eslint-disable strict */
'use strict';

import { init } from "./init.js";
import getewaysModelsPage from "./createPage/getewaysModelsPage.js";
import sensorCategoriesPage from "./createPage/sensorCategoriesPage.js";
import loggingPage from "./createPage/loggingPage.js";
import toolsPage from './createPage/toolsPage.js';
import addHeadTable from "./createPage/createComponent/createTable/addHeadTable.js";
import createTable from "./createPage/createComponent/createTable/createTable.js";
import inputGroupSearch from "./createPage/createComponent/createTable/inputGroupSearch.js";
import sendFormTimezones from "./api/apiTimezones/sendFormTimezones.js";
import { getDataStorage, saveDataJSON } from "./localStorage.js";
import eventListener from "./eventListener.js";
import sendFormGeteways from "./api/apiGeteways/sendFormGeteways.js";

function routerNavigation(data, page = 1, portionNumber = 1) {
  console.log('data: ', data);
  console.log('----------------------------routerNavigation: ');

  const content = document.querySelector('.content');
  const titlePage = document.getElementById('title-page');



  if (titlePage.textContent === "Users") {

    saveDataJSON('location', 'Users');

    const arrClass = ['col-sm-12', 'col-xl-12', 'tableUsers'];
    let addTextHead = [];
    let arr = [];
    let titleSearch = [];
    let dataAtr = [];

    const newData = data ? data : getDataStorage('data');
    const userStatus = newData.users[0].type;


    content.innerHTML = '';

    if (userStatus === "CLIENT" || userStatus === "EXTSYSTEM") {
      addTextHead = ['#', `<input id='removeAll' type="checkbox"></input>`, 'Created', 'Login',
        'State', 'Name', 'email', 'phone', 'type'];
      arr = [0, 0, 1, 1, 1, 1, 0, 0, 0];
      titleSearch = ['Login', 'UserStat'];
      dataAtr = ['', '', 'created', 'login', 'userStat', 'name', '', '', ''];
    } else if (userStatus === "ADMIN") {
      addTextHead = ['#', `<input id='removeAll' type="checkbox"></input>`, 'Photo', 'Login',
        'Name', 'created', 'updated'];
      arr = [0, 0, 0, 1, 1, 1, 1];
      titleSearch = ['Login', 'Created', 'Updated'];
      dataAtr = ['', '', '', 'login', 'name', 'created', 'updated'];
    }

    const usersTable = createTable(arrClass);
    content.append(usersTable);

    const tableHead = document.querySelector('thead');
    tableHead.append(addHeadTable(addTextHead, dataAtr, arr));

    init(newData, page, portionNumber, userStatus);
    inputGroupSearch(titleSearch, newData);

  }

  if (titlePage.textContent === "Geteways") {
    saveDataJSON('location', 'Geteways');
    content.innerHTML = '';
    sendFormGeteways();
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
  eventListener();
}

export default routerNavigation;
