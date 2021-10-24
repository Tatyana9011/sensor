/* eslint-disable strict */
'use strict';
import addStatus from './../addStatus.js';


export const error = (form, err, str) => {
  console.log('form, err: ', form, err);
  const text = str ? str : 'Unable connect to server URL address !!!';
  if (form) {
    addStatus(form, text, 3000, 'rgb(255, 100, 10)');
    console.log(err);
  } else {
    console.log(err);
  }

};

