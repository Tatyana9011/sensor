/* eslint-disable strict */
'use strict';

import addStatus from "./addStatus.js";

function inputValidate(event) {
  console.log('inputValidate: ');
  const target = event.target,
    login = document.getElementById('login'),
    form = target.closest('form'),
    btnSaveChanges = form.querySelector('button[type="submit"]'),
    inputURL = form.querySelector('input[name="URL"]'),
    value = target.value,
    allInput = form.querySelectorAll('input'),
    newInput = [];
  if (target.getAttribute('name') !== 'file') {
    if (value.match(/[а-яА-ЯЁё]/)) {
      addStatus(form, 'Change your keyboard layout!', 3000, 'rgb(255, 100, 10)');
    }

    if (target) {
      const getValue = value.trim().replace(/\s/, '').replace(/[а-яА-ЯЁё]/, '').replace(/[_]{2,}/, '_')
        .replace(/[-]{2,}/, '-');
      target.value = getValue;
    }
  }

  allInput.forEach(item => {
    if (item.value) {
      return newInput.push(item.value);
    }
    if (item.getAttribute('name') === 'file' && !item.value) {
      return newInput.push('0');
    }
  });

  const removeDisableLoginBtn = str => {
    if (str) {
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
