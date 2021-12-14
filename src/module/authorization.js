/* eslint-disable strict */
'use strict';

import sendForm from './api/apiUser/sendFormUsers.js';
import validateBlur from './validateBlur.js';
import inputValidate from './inputValidate.js';
import { saveDataJSON } from './localStorage.js';

function logIn(topic) {
  console.log('topic: ', topic);

  const form = document.querySelector('form[name="authorization"]');

  if (topic) {
    saveDataJSON('random', topic);
    validateBlur(form);

    form.addEventListener('input', inputValidate);

    form.addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(form);
      const body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      sendForm(form, body, topic);
    });
  }
}

export default logIn;
