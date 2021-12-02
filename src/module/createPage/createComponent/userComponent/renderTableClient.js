/* eslint-disable strict */
'use strict';

import { getDataStorage } from '../../../localStorage.js';

function renderTable(newData) {
  const table = document.querySelector('tbody');
  table.innerHTML = '';

  const data = newData ? newData : getDataStorage('data');
  console.log('data: ', data);

  if (data) {
    const ollTr = data.users.map((obj, index) => {
      const creatTr = document.createElement('tr');
      creatTr.innerHTML = `
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal"
                      class='col1' scope="row" data-id=${obj.id}>${index + 1}</td>
                      <td><input class='row-table col1' type="checkbox"></input></td>
                      <td data-bs-toggle="modal"
                      data-bs-target="#exampleModal" class='overflow-hidden text-break col2'>${obj.created}</td>
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal"
                      class='overflow-hidden text-wrap col2'>${obj.login}</td>
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal"
                      class='overflow-hiddentext-break col2'>${obj.userState}</td>
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal"
                      class='overflow-hidden text-break col2'>${obj.name}</td>
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal"
                      class='overflow-hidden text-break col2'>${obj.email}</td>
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal"
                      class='overflow-hidden text-break col2'>${obj.phone}</td>
                      <td data-bs-toggle="modal" data-bs-target="#exampleModal"
                      class='overflow-hidden text-break col2'>${obj.type}</td>
                      `;
      return creatTr;
    });
    table.append(...ollTr);
  }

}

export default renderTable;
