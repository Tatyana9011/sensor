/* eslint-disable strict */
'use strict';

function addHeadTable(title, arr, emphasize) {
  console.log('addHeadTable: ');

  const th = [];
  const creatTr = document.createElement('tr');

  creatTr.classList.add('thead-th');
  creatTr.innerHTML = ``;

  title.forEach((item, index) => {
    //когда true и true тогда попадаем
    if (emphasize[index] && arr[index]) {
      return th.push(`<th class="emphasize"data-name="${arr[index]}">${item}</th>`);
    }
    th.push(`<th>${item}</th>`);

  });

  creatTr.innerHTML = th.join(' ');

  return creatTr;
}

export default addHeadTable;
