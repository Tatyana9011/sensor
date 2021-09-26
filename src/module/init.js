/* eslint-disable strict */
'use strict';

import highlightBtn from './btnHighlightAll.js';
import deleteSensor from './delete.js';
import addRow from './addRow.js';
import { getDataStorage } from './localStorage.js';
import paginator from './paginator.js';
import checkResponse from './checkResponse.js';
import renderTable from './createPage/createComponent/createTable/renderTableUsers.js';
import alignmentRow from './createPage/createComponent/createTable/alignmentRow.js';

export const init = () => {
  renderTable();
  alignmentRow();
  paginator(getDataStorage('data'));
  highlightBtn();
  addRow();
  checkResponse();
  deleteSensor();

  window.addEventListener('resize', checkResponse);

  const deleteBtn = document.getElementById('delete-button');

  if (deleteBtn) {
    deleteBtn.setAttribute('disabled', 'true');
  }
};













