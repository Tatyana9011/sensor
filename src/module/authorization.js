/* eslint-disable strict */
'use strict';

import sendForm from './api/apiUser/sendFormUsers.js';
import validateBlur from './validateBlur.js';
import inputValidate from './inputValidate.js';

function logIn() {
  const form = document.querySelector('form[name="authorization"]');

  validateBlur(form);

  form.addEventListener('input', inputValidate);

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    sendForm(form, body);
  });

}

export default logIn;
