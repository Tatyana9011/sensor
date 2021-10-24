/* eslint-disable strict */
'use strict';

import { getDataStorage } from '../../../localStorage.js';

function renderTable(newData) {
  const table = document.querySelector('tbody');
  table.innerHTML = '';

  const data = newData ? newData : getDataStorage('data');

  if (data) {
    const ollTr = data.map((obj, index) => {
      const creatTr = document.createElement('tr');
      //creatTr.setAttribute('data-bs-toggle', "modal");
      //creatTr.setAttribute('data-bs-target', "#exampleModal");
      creatTr.innerHTML = `
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal"
                      class='col1' scope="row" data-id=${obj.id}>${index + 1}</td>
                      <td><input class='row-table col1' type="checkbox"></input></td>
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal" >${obj.avatarUrl ? `
                      <img alt='UserPhoto' class='img-avatar' src='./img/unnamed.jpg'/>`
          : `<img alt='UserPhoto' class='img-avatar unnamed' src='./img/unnamed.jpg' />`}</td>
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal" class='col3'>${obj.login}</td>
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal" class='col3'>${obj.created}</td>
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal" class='col3'>${obj.updated}</td>
                      `;
      return creatTr;
    });
    table.append(...ollTr);
  }

}

export default renderTable;
