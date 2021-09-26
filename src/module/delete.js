/* eslint-disable strict */
'use strict';
import sendForm from './api/sendFormUsers.js';
import creatModalDeleteUsers from './createPage/createComponent/modal/creatModalDeleteUsers.js';


function deleteSensor() {
  const deleteBtnTable = document.getElementById('delete-button');

  deleteBtnTable.addEventListener('click', event => {
    event.preventDefault();

    const checkedTr = document.querySelectorAll('.row-table');
    const arrUser = [];

    checkedTr.forEach(item => {
      if (item.checked) {
        return arrUser.push(item);
      }
    });

    const createdModal = creatModalDeleteUsers(arrUser.length);
    const modalDialog = document.querySelector('.modal-dialog');
    modalDialog.innerHTML = '';
    modalDialog.append(createdModal);

    const form = document.querySelector('.delete');

    form.addEventListener('submit', event => {
      event.preventDefault();

      arrUser.forEach(item => {
        const row = item.closest('tr');
        const td = row.querySelectorAll('td');
        sendForm(form, td[0].dataset.id);
      });
    });
  });
}

export default deleteSensor;

