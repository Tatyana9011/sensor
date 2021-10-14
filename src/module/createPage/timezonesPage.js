/* eslint-disable strict */
'use strict';

import createTable from "./createComponent/createTable/createTable.js";
import renderTableTimezones from "./createComponent/createTable/renderTableTimezones.js";
import addHeadTable from "./createComponent/createTable/addHeadTable.js";
import paginator from "./createComponent/assets/paginator.js";
import highlightBtn from "./createComponent/createTable/btnHighlightAll.js";
import alignmentRow from "./createComponent/createTable/alignmentRow.js";
import { saveDataJSON } from "../localStorage.js";
import inputGroupSearch from "./createComponent/createTable/inputGroupSearch.js";

export const lengthCorrection = dataItem => {
  console.log('lengthCorrection: ');
  if (window.innerWidth < 990) {
    if (dataItem.description.length > 16) {
      return dataItem.description = dataItem.description.replace(/\//, '/<br \/>');
    } else if (dataItem.description.length > 20) {
      return dataItem.description = dataItem.description.replace(/\//g, '/<br \/>');
    }
  } else if (window.innerWidth < 700) {
    return dataItem.description = dataItem.description.replace(/\//g, '/<br \/>');
  }
};

function timezonesPage(data) {

  saveDataJSON('timezones', JSON.parse(data));
  console.log('timezonesPage: ');
  const addTextHead = ['#', `<input id='removeAll' type="checkbox"></input>`,
    'Name', 'Offset GMT', 'Offset Ms', 'Visibility'];
  const arr = [0, 0, 1, 1, 0, 0];
  const classAdd = ['col-sm-12', 'col-xl-12', 'mb-5', 'pe-xl-5', 'pe-md-4', 'px-sm-3'];
  const titleSearch = ['Name', 'Offset GMT'];
  const dataAtr = ['', '', 'description', 'name', '', ''];

  const loaderHtml = document.querySelector('.preloader');
  if (loaderHtml) {
    loaderHtml.remove();
  }

  const content = document.querySelector('.content');

  const getData = JSON.parse(data);

  const addTable = createTable(classAdd);

  content.append(addTable);
  renderTableTimezones(getData);

  const tableHead = document.querySelector('thead');
  tableHead.append(addHeadTable(addTextHead, dataAtr, arr));

  if (window.innerWidth < 990) {
    const thead = document.querySelector('.thead-th').children;
    for (let i = 0; i < thead.length; i++) {
      thead[i].style.fontSize = '14px';
    }
  } else if (window.innerWidth < 700) {

  }

  inputGroupSearch(titleSearch, getData);
  paginator(getData);
  highlightBtn();
  alignmentRow();
}

export default timezonesPage;
