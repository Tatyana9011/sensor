/* eslint-disable strict */
'use strict';

import updateData from "../../../api/apiUser/updateData.js";
import { getDataStorage } from "../../../localStorage.js";
import typeDefinition from "./typeDefinition.js";
import handleActiveTab from "./handleActiveTab.js";
import pageNow from "../assets/pageNow.js";

const updateDataType = () => {
  console.log('updateDataType: ');

  const form = document.getElementById('updateUsers');
  const userType = getDataStorage('userType');

  const objPagenate = pageNow();

  if (userType) {
    updateData(form, objPagenate.page, objPagenate.portionNumber, userType);
    const filterButtons = document.querySelectorAll(".filter-button");
    const root = document.documentElement;
    filterButtons.forEach(item => {
      if (item.textContent === typeDefinition(userType)) {
        const targetTranslateValue = item.dataset.translateValue;
        handleActiveTab(filterButtons, item, "filter-active");
        root.style.setProperty("--translate-filters-slider", targetTranslateValue);
      }
    });

  } else {
    updateData(form, objPagenate.page, objPagenate.portionNumber);
  }
};

export default updateDataType;
