/* eslint-disable strict */
'use strict';
import sendForm from './api/sendForm.js';
import creatModalDeleteUsers from './modal/creatModalDeleteUsers.js';


function deleteSensor() {
  const deleteBtn = document.getElementById('delete-button');

  deleteBtn.addEventListener('click', event => {
    event.preventDefault();

    const checkedTr = document.querySelectorAll('.row-table');
    const createdModal = creatModalDeleteUsers();
    const modalDialog = document.querySelector('.modal-dialog');
    modalDialog.innerHTML = '';
    modalDialog.append(createdModal);


    const form = document.querySelector('.delete');

    form.addEventListener('submit', event => {
      event.preventDefault();
      console.log('event: ', event);

      const formData = new FormData(form);
      const body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });
      body.adminRole = "CSR";

      sendForm(form, body);
    });



    checkedTr.forEach(item => {
      if (item.checked) {
        const row = item.closest('tr');
        const td = row.querySelectorAll('td');
        sendForm(null, td[0].dataset.id);
      }
    });
  });
}

export default deleteSensor;
