/* eslint-disable strict */
'use strict';

import createTable from "./createComponent/createTable/createTable.js";
import addRowTable from "./createComponent/createTable/addRowTable.js";
import addHeadTable from "./createComponent/createTable/addHeadTable.js";
import paginator from "../paginator.js";
import highlightBtn from "../btnHighlightAll.js";
import alignmentRow from "./createComponent/createTable/alignmentRow.js";


function timezonesPage(data) {
  console.log('timezonesPage: ');

  const loaderHtml = document.querySelector('.preloader');
  if (loaderHtml) {
    loaderHtml.remove();
  }

  const content = document.querySelector('.content');
  const td = [];

  const getData = JSON.parse(data);
  const classAdd = ['col-sm-12', 'col-xl-12', 'mb-5', 'pe-xl-5', 'pe-md-4', 'px-sm-3'];
  const addTable = createTable(classAdd);

  getData.forEach((item, index) => {
    td.push(addRowTable(item, index + 1));
  });

  content.append(addTable);

  const tableHead = document.querySelector('thead');
  const addTextHead = ['#', `<input id='removeAll' type="checkbox"></input>`,
    'description', 'name', 'offsetMs', 'visibility'];
  tableHead.append(addHeadTable(addTextHead));

  const tableRow = document.querySelector('tbody');
  tableRow.innerHTML = '';
  tableRow.append(...td);

  paginator(getData);
  highlightBtn();
  alignmentRow();
}

export default timezonesPage;
