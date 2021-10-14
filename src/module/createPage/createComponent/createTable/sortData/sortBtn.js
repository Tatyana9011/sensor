/* eslint-disable strict */
'use strict';

import sortData from "./sortData.js";
import renderTableUsers from "../renderTableUsers.js";
import renderTableTimezones from "../renderTableTimezones.js";
import { init } from "../../../../init.js";

function sortBtn(target, data) {
  console.log('sortBtn: ');

  target.classList.add('btnFilter');
  target.classList.toggle('active');

  if (!target.matches('.active')) {

    const newData = sortData(target.dataset.name, data, 'active');

    if (target.textContent === 'Login' ||
      target.textContent === 'Created' || target.textContent === 'Updated') {

      init(newData);


    } else if (target.textContent === 'Name' ||
      target.textContent === 'Offset GMT' || target.textContent === 'Offset Ms') {

      renderTableTimezones(newData);

    }

  } else {

    const newData = sortData(target.dataset.name, data);

    if (target.textContent === 'Login' ||
      target.textContent === 'Created' || target.textContent === 'Updated') {

      init(newData);

    } else if (target.textContent === 'Name' ||
      target.textContent === 'Offset GMT' || target.textContent === 'Offset Ms') {

      renderTableTimezones(newData);

    }

  }

}

export default sortBtn;












