/* eslint-disable strict */
'use strict';

import addStatus from "./addStatus.js";

function inputValidate(event) {
  const target = event.target,
    login = document.getElementById('login'),
    form = target.closest('form'),
    btnSaveChanges = form.querySelector('button[type="submit"]'),
    value = target.value,
    allInput = form.querySelectorAll('input'),
    newInput = [];

  if (value.match(/[а-яА-ЯЁё]/)) {
    addStatus(form, 'Change your keyboard layout!', 3000, 'rgb(255, 100, 10)');
  }

  if (target) {
    const getValue = value.trim().replace(/\s/, '').replace(/[а-яА-ЯЁё]/, '').replace(/[_]{2,}/, '_')
      .replace(/[-]{2,}/, '-');
    target.value = getValue;
  }

  allInput.forEach(item => {
    if (item.value) {
      return newInput.push(item.value);
    }
  });

  if (newInput.length === allInput.length) {
    btnSaveChanges.classList.remove('btn-secondary');
    btnSaveChanges.classList.add('btn-primary');
    if (login) {
      login.removeAttribute('disabled');
    }
  } else {
    if (login) {
      login.setAttribute('disabled', 'true');
    }
    btnSaveChanges.classList.add('btn-secondary');
    btnSaveChanges.classList.remove('btn-primary');
  }
}

export default inputValidate;
