/* eslint-disable strict */
'use strict';
import addStatus from './../addStatus.js';


export const error = (form, err, str) => {
  console.log('str: ', str);
  console.log('form, err: ', form, err);
  let text = '';

  if (str) {
    const textError = str.body.localizedMsg.match(/^error_/);
    console.log('textError: ', textError);
    if (textError === true) {
      text = str.body.rawMsg;
      return text;
    } {
      text = str.body.localizedMsg;
      return text;
    }
  }
  //'Unable connect to server URL address !!!'
  const message = text ? text : err;
  if (form) {
    addStatus(form, message, 60000, 'rgb(255, 100, 10)');
    console.log(err);
  } else {
    console.log(err);
  }

};

