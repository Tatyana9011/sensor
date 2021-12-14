/* eslint-disable strict */
'use strict';

import addStatus from './addStatus.js';

const validateBlur = form => {
  const allInput = form.querySelectorAll('input'),
    login = document.getElementById('login'),
    btnSaveChanges = form.querySelector('button[type="submit"]');

  allInput.forEach(input => {
    input.addEventListener('blur', event => {
      event.preventDefault();
      const target = event.target;

      if (target.matches('input[placeholder="Server URL"]')) {
        const getValue = target.value
          .match(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g);

        if (!getValue) {

          addStatus(form, 'Wrong server URL format', 3000, 'rgb(255, 100, 10)');

          if (login) {
            login.setAttribute('disabled', 'true');
          }

          btnSaveChanges.classList.add('btn-secondary');
          btnSaveChanges.classList.remove('btn-primary');

          return;

        } else {
          const str = getValue.join();
          if (str.slice(length - 1) !== '/') {
            target.value = getValue + '/';
          }
        }
      }

      if (target.matches('input[placeholder="Email"]')) {
        const getValue = target.value.match(/^\w+([-._!~*']?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);

        if (!getValue) {
          addStatus(form, 'Wrong not valid email', 3000, 'rgb(255, 100, 10)');
          target.value = '';
          btnSaveChanges.classList.add('btn-secondary');
          btnSaveChanges.classList.remove('btn-primary');
          return;
        }
      }
    });
  });
};

export default validateBlur;

