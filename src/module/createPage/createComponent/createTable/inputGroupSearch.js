/* eslint-disable strict */
'use strict';

import renderTableTimezones from "../timezonesComponent/renderTableTimezones.js";
import { init } from "../../../init.js";

const inputGroupSearch = (title, data) => {
  const inputGroup = document.querySelector('.input-group');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const titlePage = document.getElementById('title-page');

  if (dropdownMenu) {
    dropdownMenu.innerHTML = '';

    title.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a class="dropdown-item" href="#" data-filter="${item.toLowerCase()}">${item}</a>`;
      dropdownMenu.append(li);
    });

    const addListener = (str, callback) => {
      inputGroup.addEventListener('input', event => {
        const target = event.target;
        let newData = [];
        if (target.value.length >= 2) {

          const regX = new RegExp("^" + target.value.toLowerCase() + ".*");
          newData = data.filter(elem => elem[str].toLowerCase().match(regX));

          callback(newData);

        } else if (target.value.trim() === '') {

          callback(data);

        }

      });
    };

    inputGroup.addEventListener('click', event => {
      const target = event.target;
      const input = inputGroup.querySelector('.form-control');

      if (target.matches('.dropdown-item') && titlePage.textContent === "Users") {

        if (target.dataset.filter === 'created' || target.dataset.filter === 'updated') {


          input.value = '2021-';

        }

        addListener(target.dataset.filter, init);
        return;

      } else if (!input.value && target.matches('.form-control') && titlePage.textContent === "Users") {

        addListener('login', init);

      }

      if (target.matches('.dropdown-item') && titlePage.textContent === "Timezones") {

        if (target.dataset.filter === 'name') {

          addListener('description', renderTableTimezones);

        } else if (target.dataset.filter === 'offset gmt') {

          input.value = 'GMT-';
          addListener('name', renderTableTimezones);

        }

      } else if (!input.value && target.matches('.form-control') && titlePage.textContent === "Timezones") {

        addListener('description', renderTableTimezones);

      }
    });

  }

};

export default inputGroupSearch;
