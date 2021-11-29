/* eslint-disable strict */
'use strict';
import alignmentRow from "./createPage/createComponent/createTable/alignmentRow.js";


function checkResponse() {
  const leftMenu = document.querySelector('.left-menu');
  const wrapperRow = document.querySelector('.wrapper-row');
  if (wrapperRow) {
    wrapperRow.style.cssText = `height:${document.documentElement.clientHeight}px`;
  }

  alignmentRow();
  if (leftMenu) {
    if (document.documentElement.clientWidth < 990) {
      leftMenu.classList.add('burger-menu');
      leftMenu.classList.add('close');
    } else {
      leftMenu.classList.remove('burger-menu');
    }
  }

}

export default checkResponse;
