/* eslint-disable strict */
'use strict';

import highlightBtn from './module/btnHighlightAll.js';
import deleteSensor from './module/delete.js';
import addRow from './module/addRow.js';
import authorization from './module/authorization.js';
import btnExit from './module/btnExit.js';
import { getDataStorage } from './module/localStorage.js';
import creatLoginPage from './module/creatLoginPage.js';
import creatSensorPage from './module/creatSensorPage.js';
import renderTable from './module/renderTable.js';
import paginator from './module/paginator.js';
import rowThead from './module/rowThead.js';

const wrapper = document.querySelector('.wrapper');
const sensor = document.querySelector('.sensor');

export const init = () => {
  renderTable();
  rowThead();
  paginator();
  highlightBtn();
  deleteSensor();
  addRow();
  btnExit();
};

if (!getDataStorage('data')) {
  if (sensor) {
    sensor.remove();
  }

  wrapper.append(creatLoginPage());
  authorization();

} else {

  wrapper.append(creatSensorPage());
  init();
}








