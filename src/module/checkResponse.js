/* eslint-disable strict */
'use strict';
import alignmentRow from "./createPage/createComponent/createTable/alignmentRow.js";


function checkResponse() {
  const leftMenu = document.querySelector('.left-menu');

  alignmentRow();

  if (document.documentElement.clientWidth < 990) {
    leftMenu.classList.add('burger-menu');
    leftMenu.classList.add('close');
  } else {
    leftMenu.classList.remove('burger-menu');
  }
}

export default checkResponse;
