/* eslint-disable strict */
'use strict';

import createTable from "./createComponent/createTable/createTable.js";
import renderTableTimezones from "./createComponent/timezonesComponent/renderTableTimezones.js";
import addHeadTable from "./createComponent/createTable/addHeadTable.js";
import paginator from "./createComponent/assets/paginator.js";
import highlightBtn from "./createComponent/createTable/btnHighlightAll.js";
import alignmentRow from "./createComponent/createTable/alignmentRow.js";
import { saveDataJSON } from "../localStorage.js";
import inputGroupSearch from "./createComponent/createTable/inputGroupSearch.js";
import responseError from "../api/responseError.js";

export const lengthCorrection = dataItem => {
  console.log('lengthCorrection: ');
  if (window.innerWidth < 990) {
    if (dataItem.description.length > 16) {
      dataItem.description = dataItem.description.replace(/\//, '/<br/>');
      return dataItem.description;
    } else if (dataItem.description.length > 20) {
      dataItem.description = dataItem.description.replace(/\//g, '/<br/>');
      return dataItem.description;
    }
  } else if (window.innerWidth < 700) {
    dataItem.description = dataItem.description.replace(/\//g, '/<br/>');
    return dataItem.description;
  }
};

function timezonesPage(data) {

  if (!JSON.parse(data).errorKey) {
    console.log('timezonesPage: ');
    saveDataJSON('timezones', JSON.parse(data));
    const addTextHead = ['#', `<input id='removeAll' type="checkbox"></input>`,
      'Name', 'Offset GMT', 'Offset Ms', 'Visibility'];
    const arr = [0, 0, 1, 1, 0, 0];
    const classAdd = ['col-sm-12', 'col-xl-12'];
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
      console.log('window.innerWidth: ');
    }

    inputGroupSearch(titleSearch, getData);
    paginator(getData);
    highlightBtn();
    alignmentRow();
  } else {
    responseError(null, data);
  }
}

export default timezonesPage;
