/* eslint-disable strict */
'use strict';
import addStatus from './../addStatus.js';


export const error = (form, err) => {
  console.log('form, err: ', form, err);
  if (form) {
    addStatus(form, 'Unable connect to server URL address !!!', 3000, 'rgb(255, 100, 10)');
    console.log(err);
  } else {
    console.log(err);
  }

};

