/* eslint-disable strict */
'use strict';

function addHeadTable(title) {
  console.log('addHeadTable: ');

  const th = [];
  const creatTr = document.createElement('tr');

  creatTr.classList.add('thead-th');
  creatTr.innerHTML = ``;

  title.forEach(item => {

    th.push(`<th>${item}</th>`);

  });

  creatTr.innerHTML = th.join(' ');

  return creatTr;
}

export default addHeadTable;
