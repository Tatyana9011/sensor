/* eslint-disable strict */
'use strict';

import sortData from "./sortData.js";
import renderTableTimezones from "../../timezonesComponent/renderTableTimezones.js";
import { init } from "../../../../init.js";
import { getDataStorage } from "../../../../localStorage.js";
import getewaysManageDevices from "../../getewaysComponent/getewaysManageDevices.js";

function sortBtn(target, data) {
  console.log('sortBtn: ');
  const location = getDataStorage('location');
  target.classList.add('btnFilter');
  target.classList.toggle('active');

  if (!target.matches('.active')) {

    const newData = sortData(target.dataset.name, data, 'active');

    if (location === "Users") {

      init(newData);


    } else if (location === "Timezones") {

      renderTableTimezones(newData);

    } else if (location === "Geteways") {

      getewaysManageDevices(newData);

    }

  } else {

    const newData = sortData(target.dataset.name, data);

    if (location === "Users") {

      init(newData);

    } else if (location === "Timezones") {

      renderTableTimezones(newData);

    } else if (location === "Geteways") {

      getewaysManageDevices(newData);

    }

  }

}

export default sortBtn;












