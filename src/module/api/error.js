/* eslint-disable strict */
'use strict';
import addStatus from './../addStatus.js';

export const error = (form, error) => {
  if (form) {
    addStatus(form, `Unable connect to server URL address !!!`, 3000, 'rgb(255, 100, 10)');
    console.log(error);
  }
  console.log(error);
};

