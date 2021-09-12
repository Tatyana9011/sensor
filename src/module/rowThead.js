/* eslint-disable strict */
'use strict';

function rowThead() {
  const theadTh = document.querySelector('.thead-th').children;
  const tbodyRow = document.querySelector('tbody');
  const rowOun = tbodyRow.children[0].children;

  for (let i = 0; i <= rowOun.length - 1; i++) {
    const widthTd = rowOun[i].clientWidth;
    theadTh[i].style.width = widthTd + 'px';
  }
  console.log('rowThead');
}

export default rowThead;
