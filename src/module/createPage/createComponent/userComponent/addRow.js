/* eslint-disable strict */
'use strict';

import inputValidate from '../../../inputValidate.js';
import sendForm from '../../../api/apiUser/sendFormUsers.js';
import validateBlur from '../../../validateBlur.js';
import creatModalAddUsers from '../modal/creatModalAddUsers.js';

function addRow() {
  const modalDialog = document.querySelector('.modal-dialog');
  const btnAddRow = document.getElementById('add-row');

  btnAddRow.addEventListener('click', event => {
    event.preventDefault();

    const content = creatModalAddUsers();

    modalDialog.innerHTML = '';
    modalDialog.append(content);

    const form = document.querySelector('.form-add-row');

    validateBlur(form);

    form.addEventListener('input', inputValidate);

    form.addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(form);
      const body = {};

      formData.forEach((val, key) => {
        if (key === "email" || key === "phone" || key === "name" || key === "login") {
          body[key] = encodeURIComponent(val);
        } else {
          body[key] = val;
        }
      });
      body.adminRole = "CSR";

      sendForm(form, body);
    });
  });
}

export default addRow;

