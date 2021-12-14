/* eslint-disable strict */
'use strict';

import highlightBtn from './createPage/createComponent/createTable/btnHighlightAll.js';
import deleteSensor from './delete.js';
import addRow from './createPage/createComponent/userComponent/addRow.js';
import paginator from './createPage/createComponent/assets/paginator.js';
import checkResponse from './checkResponse.js';
import renderTableClient from './createPage/createComponent/userComponent/renderTableClient.js';
import alignmentRow from './createPage/createComponent/createTable/alignmentRow.js';
import renderTableAdmin from './createPage/createComponent/userComponent/renderTableAdmin.js';


export const init = (data, page = 1, portionNumber = 1, userStatus = "CLIENT") => {
  if (userStatus === "CLIENT" || userStatus === "EXTSYSTEM") {
    renderTableClient(data);
  } else if (userStatus === "ADMIN") {
    renderTableAdmin(data);
  }

  alignmentRow();
  paginator(data, page, portionNumber);
  highlightBtn();
  addRow();
  checkResponse();
  deleteSensor();

  const deleteBtn = document.getElementById('delete-button');

  if (deleteBtn) {
    deleteBtn.setAttribute('disabled', 'true');
  }
};













