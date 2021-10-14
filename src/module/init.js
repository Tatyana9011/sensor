/* eslint-disable strict */
'use strict';

import highlightBtn from './createPage/createComponent/createTable/btnHighlightAll.js';
import deleteSensor from './delete.js';
import addRow from './createPage/createComponent/userComponent/addRow.js';
import paginator from './createPage/createComponent/assets/paginator.js';
import checkResponse from './checkResponse.js';
import renderTable from './createPage/createComponent/createTable/renderTableUsers.js';
import alignmentRow from './createPage/createComponent/createTable/alignmentRow.js';

export const init = data => {
  console.log('init: ');
  renderTable(data);
  alignmentRow();
  paginator(data);
  highlightBtn();
  addRow();
  checkResponse();
  deleteSensor();

  const deleteBtn = document.getElementById('delete-button');

  if (deleteBtn) {
    deleteBtn.setAttribute('disabled', 'true');
  }
};













