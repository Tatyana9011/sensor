/* eslint-disable strict */
'use strict';

import { getDataStorage } from '../../../localStorage.js';

function renderTable() {
  const table = document.querySelector('tbody');
  table.innerHTML = '';

  const data = getDataStorage('data');

  if (data) {
    const ollTr = data.map((obj, index) => {
      const creatTr = document.createElement('tr');
      creatTr.innerHTML = `
                      <td class='col1' scope="row" data-id=${obj.id}>${index + 1}</td>
                      <td><input class='row-table col1' type="checkbox"></input></td>
                      <td class='col2'>${obj.login}</td>
                      <td class='col3'>${obj.photo ? `<img alt='UserPhoto' class='img-avatar' src='${obj.photo}'/>`
          : `<img alt='UserPhoto' class='img-avatar' src='./img/avatar.jpg' />`}</td>
                      <td class='col3'>${obj.created}</td>
                      <td class='col3'>${obj.updated}</td>
                      `;
      return creatTr;
    });
    table.append(...ollTr);
  }

}

export default renderTable;
