/* eslint-disable strict */
'use strict';

import { portionSize } from "../../../include/constant.js";

function pageNow() {

  const pages = document.querySelectorAll('.page');
  const actionPage = { page: 1, portionNumber: 1 };

  if (pages) {
    pages.forEach(item => {

      if (item.classList.contains('action')) {
        actionPage.page = +item.textContent;
        return actionPage;
      }

    });
    actionPage.portionNumber = Math.ceil(actionPage.page / portionSize);
  }

  console.log('actionPage: ', actionPage);
  return actionPage;

}

export default pageNow;












