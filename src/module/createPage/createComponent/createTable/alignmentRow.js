/* eslint-disable strict */
'use strict';

function alignmentRow() {
  console.log('alignmentRow: ');
  const table = document.querySelector('table');
  if (table) {
    const tbody = document.querySelector('tbody').children;
    const thead = document.querySelector('.thead-th');
    const theadTh = thead.querySelectorAll('th');
    const td = tbody[0].querySelectorAll('td');

    for (let i = 0; i < td.length; i++) {

      theadTh[i].style.width = td[i].offsetWidth + 'px';

    }
  }
}

export default alignmentRow;
