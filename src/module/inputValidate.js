/* eslint-disable strict */
'use strict';

import addStatus from "./addStatus.js";

function inputValidate(event) {
  const target = event.target,
    login = document.getElementById('login'),
    form = target.closest('form'),
    btnSaveChanges = form.querySelector('button[type="submit"]'),
    inputURL = form.querySelector('input[name="URL"]'),
    value = target.value,
    allInput = form.querySelectorAll('input'),
    newInput = [],
    button = form.querySelector('button[type="submit"]');

  if (button) {
    button.classList.add('btn-primary');
    button.classList.remove('btn-outline-primary');
  }

  if (target.getAttribute('name') !== 'file') {
    if (value.match(/[а-яА-ЯЁё]/)) {
      addStatus(form, 'Change your keyboard layout!', 3000, 'rgb(255, 100, 10)');
    }

    if (target && target.getAttribute('name') !== 'name') {
      const getValue = value.trim().replace(/\s/, '').replace(/[а-яА-ЯЁё]/, '').replace(/[_]{2,}/, '_')
        .replace(/[-]{2,}/, '-');
      target.value = getValue;
    } else if (target.getAttribute('name') === 'name') {
      const getValue = value.replace(/[а-яА-ЯЁё]/, '').replace(/[_]{2,}/, '_')
        .replace(/[-]{2,}/, '-');
      target.value = getValue;
    }
  }

  allInput.forEach(item => {
    if (item.value) {
      return newInput.push(item.value);
    }
    if (item.getAttribute('type') === 'file' && !item.value) {
      return newInput.push('0');
    }
    if (item.getAttribute('name') === 'Phone' && !item.value) {
      return newInput.push('0');
    }
  });

  const removeDisableLoginBtn = str => {
    if (str) {
      btnSaveChanges.classList.remove('btn-outline-primary');
      btnSaveChanges.classList.add('btn-primary');
      button.removeAttribute('disabled');
      if (login) {
        login.removeAttribute('disabled');
        btnSaveChanges.classList.remove('btn-secondary');
        btnSaveChanges.classList.add('btn-primary');
      }
    } else {
      if (login) {
        login.setAttribute('disabled', 'true');
      } else {
        btnSaveChanges.classList.add('btn-outline-primary');
        btnSaveChanges.classList.remove('btn-primary');
      }
    }
  };

  removeDisableLoginBtn(newInput.length === allInput.length);

  if (inputURL) {
    if (inputURL.value === '/') {
      const getValueSymbol = inputURL.value.replace('/', 'http://127.0.0.1:9993/');
      target.value = getValueSymbol;
    }
    const getValue = inputURL.value
      .match(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g);
    removeDisableLoginBtn(getValue && newInput.length === allInput.length);
  }
}

export default inputValidate;
