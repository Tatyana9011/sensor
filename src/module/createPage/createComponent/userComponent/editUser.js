/* eslint-disable strict */
'use strict';

import inputValidate from "../../../inputValidate.js";
import validateBlur from "../../../validateBlur.js";
import state from "../../../include/state.js";
import addInputDetails from "./addInputDetails.js";
import { inputDetails } from "../../../include/constant.js";

function editUser() {
  const form = document.querySelector('.form-add-photo');
  const inputs = document.querySelectorAll('.details-users-value');
  const btnEdit = document.getElementById('edit');
  const detailsInput = document.querySelector('.details-input');

  btnEdit.classList.add('visually-hidden');

  inputDetails.forEach(input => {
    state.detailsInput[input] = '';
  });

  inputs.forEach(input => {
    input.removeAttribute('disabled');
    const getValue = input.getAttribute('placeholder');
    input.value = getValue;
    const title = input.getAttribute('name');
    state.detailsInput[title] = getValue;
  });

  inputDetails.forEach(input => {
    if (state.detailsInput[input] === '') {
      detailsInput.append(addInputDetails(input));
    }
  });

  const inputNew = document.querySelectorAll('.details-users-value');
  inputNew.forEach(input => {
    input.addEventListener('input', inputValidate);
  });

  validateBlur(form);
}

export default editUser;

