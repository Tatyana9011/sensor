/* eslint-disable strict */
'use strict';
import addStatus from "../addStatus.js";
import modal from "../modal.js";

const responseError = (form, str) => {
  console.log('responseError: ');
  const button = form.querySelector('button[type="submit"]');

  if (button) {
    button.classList.add('btn-outline-primary');
    button.classList.remove('btn-primary');
    button.setAttribute('disabled', true);
  }
  if (str instanceof Blob) return true;

  const getForm = form ? form : document.getElementById('updateUsers');
  const massage = str.replace(/[0-9]/ig, '');
  const text = JSON.parse(str);
  const modalOpen = document.querySelector('.modal');

  if (str !== "true" && massage && text.localizedMsg) {
    if (text.localizedMsg.match(/^error_/)) {
      addStatus(getForm, text.rawMsg, 10000, 'rgb(255, 100, 10)');
      return false;
    } else {
      addStatus(getForm, text.localizedMsg, 10000, 'rgb(255, 100, 10)');
      return false;
    }
  } else if (str === 'true' && modalOpen) {
    console.log('str === : ');

    const modalBackdrop = document.querySelector('.modal-backdrop');
    modalBackdrop.remove();
    modalOpen.remove();
  }
  if (!modalOpen) {
    const sensor = document.querySelector('.sensor');
    sensor.append(modal());
  }

  return true;
};

export default responseError;
