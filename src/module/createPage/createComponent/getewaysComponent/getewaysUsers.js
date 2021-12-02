/* eslint-disable strict */
'use strict';
import createTable from "../createTable/createTable.js";
import addHeadTable from "../createTable/addHeadTable.js";
import inputGroupSearch from "../createTable/inputGroupSearch.js";
import highlightBtn from "../createTable/btnHighlightAll.js";
import alignmentRow from "../createTable/alignmentRow.js";
import getewaysManageDevices from "./getewaysManageDevices.js";
import paginator from "../assets/paginator.js";
import { saveDataJSON } from "../../../localStorage.js";
import responseError from "../../../api/responseError.js";

function getewaysUsers(data) {
  console.log('getewaysUsers ');

  if (JSON.parse(data).errorKey) {
    responseError(null, data);
  } else {
    const content = document.querySelector('.content');
    const addTextHead = ['#', `<input id='removeAll' type="checkbox"></input>`,
      'Created', 'Updated', 'serialNumber', 'Status'];
    const arr = [0, 0, 1, 1, 1, 0];
    const classAdd = ['col-sm-12', 'col-xl-12', 'p-1'];
    const titleSearch = ['Created', 'Updated', 'serialNumber'];
    const dataAtr = ['', '', 'created', 'updated', 'serialNumber', ''];
    const loaderHtml = document.querySelector('.preloader');

    if (loaderHtml) {
      setTimeout(() => {
        loaderHtml.remove();
      }, 10000);
    }

    const getData = JSON.parse(data).devices;

    saveDataJSON('geteways', getData);

    const addTable = createTable(classAdd);

    const wrapper = document.createElement('div');
    const arrClass = ['geteways-td'];

    wrapper.classList.add(...arrClass);
    wrapper.append(addTable);

    content.append(wrapper);

    getewaysManageDevices(getData);

    const tableHead = document.querySelector('thead');
    tableHead.append(addHeadTable(addTextHead, dataAtr, arr));

    if (window.innerWidth < 990) {
      const thead = document.querySelector('.thead-th').children;
      for (let i = 0; i < thead.length; i++) {
        thead[i].style.fontSize = '14px';
      }
    } else if (window.innerWidth < 700) {
      console.log('window.innerWidth < 700: ');
    }

    inputGroupSearch(titleSearch, getData);
    paginator(getData);
    highlightBtn();
    alignmentRow();
  }



}

export default getewaysUsers;
