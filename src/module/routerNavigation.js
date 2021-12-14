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
import { saveDataJSON } from "./localStorage.js";
import eventListener from "./eventListener.js";
import sendFormGeteways from "./api/apiGeteways/sendFormGeteways.js";
import {
  addTextHeadClients, arrClients,
  titleSearchClients, dataAtrClients,
  addTextHeadAdmin, arrAdmin,
  titleSearchAdmin, dataAtrAdmin, arrClassUsers
} from './include/constant.js';
import state from "./include/state.js";


function routerNavigation(data, page = 1, portionNumber = 1) {
  console.log('----------------------------routerNavigation: ');

  const content = document.querySelector('.content');
  const titlePage = document.getElementById('title-page');



  if (titlePage.textContent === "Users") {

    saveDataJSON('location', 'Users');

    const arrClass = arrClassUsers;
    let addTextHead = [];
    let arr = [];
    let titleSearch = [];
    let dataAtr = [];

    const newData = data ? data : state.usersData;
    const userStatus = newData.users[0].type;
    const formAddPhoto = document.querySelector('.form-add-photo');

    if (formAddPhoto) {
      const btn = formAddPhoto.querySelector('button[type="submit"]');
      btn.setAttribute('disabled', true);
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-outline-primary');
    }

    content.innerHTML = '';

    if (userStatus === "CLIENT" || userStatus === "EXTSYSTEM") {
      addTextHead = addTextHeadClients;
      arr = arrClients;
      titleSearch = titleSearchClients;
      dataAtr = dataAtrClients;
    } else if (userStatus === "ADMIN") {
      addTextHead = addTextHeadAdmin;
      arr = arrAdmin;
      titleSearch = titleSearchAdmin;
      dataAtr = dataAtrAdmin;
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
