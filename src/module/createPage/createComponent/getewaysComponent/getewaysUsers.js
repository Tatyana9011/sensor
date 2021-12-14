/* eslint-disable strict */
'use strict';
import createTable from "../createTable/createTable.js";
import addHeadTable from "../createTable/addHeadTable.js";
import inputGroupSearch from "../createTable/inputGroupSearch.js";
import highlightBtn from "../createTable/btnHighlightAll.js";
import alignmentRow from "../createTable/alignmentRow.js";
import getewaysManageDevices from "./getewaysManageDevices.js";
import paginator from "../assets/paginator.js";
import responseError from "../../../api/responseError.js";
import state from "../../../include/state.js";
import {
  addTextHeadGeteways, classAddGeteways,
  arrGeteways, titleSearchGeteways,
  dataAtrGeteways
} from "../../../include/constant.js";

function getewaysUsers(data) {
  if (JSON.parse(data).errorKey) {
    responseError(null, data);
  } else {
    const content = document.querySelector('.content');
    const addTextHead = addTextHeadGeteways;
    const arr = arrGeteways;
    const classAdd = classAddGeteways;
    const titleSearch = titleSearchGeteways;
    const dataAtr = dataAtrGeteways;
    const loaderHtml = document.querySelector('.preloader');

    if (loaderHtml) {
      setTimeout(() => {
        loaderHtml.remove();
      }, 10000);
    }

    const getData = JSON.parse(data).devices;

    state.getewaysData = getData;

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
    }

    inputGroupSearch(titleSearch, getData);
    paginator(getData);
    highlightBtn();
    alignmentRow();
  }



}

export default getewaysUsers;
