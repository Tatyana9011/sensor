/* eslint-disable strict */
'use strict';

import { getDataStorage } from './localStorage.js';

function renderTable() {
  const table = document.querySelector('tbody');
  table.innerHTML = '';
  const data = getDataStorage('data');
  console.log(' renderTable data: ', data);
  if (data) {
    const ollTr = data.map((obj, index) => {
      const creatTr = document.createElement('tr');
      creatTr.innerHTML = `
                      <td scope="row" data-id=${obj.id}>${index + 1}</td>
                      <td><input class='row-table ' type="checkbox"></input></td>
                      <td>${obj.login}</td>
                      <td>${obj.created}</td>
                      <td>${obj.updated}</td>
                      <td>${obj.photo ? `<img alt='UserPhoto' class='img-avatar' src='${obj.photo}'/>`
          : `<img alt='UserPhoto' class='img-avatar' src='./img/avatar.jpg' />`}</td>
          
                      `;
      return creatTr;
    });
    table.append(...ollTr);
  }




}

export default renderTable;
