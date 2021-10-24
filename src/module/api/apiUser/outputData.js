/* eslint-disable strict */
'use strict';
import { saveDataJSON } from "../../localStorage.js";
import updateData from './updateData.js';
import websocket from "../../websocket/websoket.js";

const outputData = (form, body, data) => {

  saveDataJSON('name', JSON.parse(data));
  saveDataJSON('URL', body.URL);

  websocket();

  form.reset();

  const btnSubmit = form.querySelector('button[type="submit"]');
  if (btnSubmit) {
    btnSubmit.setAttribute('disabled', 'true');
    btnSubmit.classList.remove('btn-primary');
    btnSubmit.classList.add('btn-secondary');
  }

  setTimeout(() => {
    const loaderHtml = document.querySelector('.preloader');
    if (loaderHtml) {
      loaderHtml.remove();
    }

    const modal = form.closest('.popup');
    if (modal) {
      modal.style.display = 'none';
    }
  }, 3000);

  updateData(form);

};

export default outputData;
