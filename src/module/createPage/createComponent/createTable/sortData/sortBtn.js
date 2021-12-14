/* eslint-disable strict */
'use strict';

import sortData from "./sortData.js";
import renderTableTimezones from "../../timezonesComponent/renderTableTimezones.js";
import { init } from "../../../../init.js";
import { getDataStorage } from "../../../../localStorage.js";
import getewaysManageDevices from "../../getewaysComponent/getewaysManageDevices.js";
import pageNow from "../../assets/pageNow.js";

function sortBtn(target, data) {
  console.log('sortBtn: ');
  const location = getDataStorage('location');
  const userType = getDataStorage('userType');
  target.classList.add('btnFilter');
  target.classList.toggle('active');

  const objPagenate = pageNow();

  if (!target.matches('.active')) {

    const newData = sortData(target.dataset.name, data, 'active');


    if (location === "Users") {
      //newData, page, portionNumber, userStatus

      init(newData, +objPagenate.page, objPagenate.portionNumber, userType);


    } else if (location === "Timezones") {

      renderTableTimezones(newData);

    } else if (location === "Geteways") {

      getewaysManageDevices(newData);

    }

  } else {

    const newData = sortData(target.dataset.name, data);

    if (location === "Users") {

      init(newData, +objPagenate.page, objPagenate.portionNumber, userType);

    } else if (location === "Timezones") {

      renderTableTimezones(newData);

    } else if (location === "Geteways") {

      getewaysManageDevices(newData);

    }

  }

}

export default sortBtn;












