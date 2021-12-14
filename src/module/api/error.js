/* eslint-disable strict */
'use strict';
import addStatus from './../addStatus.js';


export const error = (form, str, err) => {
  let text = '';

  if (str) {
    const textError = str.body.localizedMsg.match(/^error_/);
    if (textError === true) {
      text = str.body.rawMsg;
      return text;
    } {
      text = str.body.localizedMsg;
      return text;
    }
  }

  if (text) {
    addStatus(form, text, 10000, 'rgb(255, 100, 10)');
    console.log(err);
  } else if (err.TypeError === `Failed to fetch`) {
    console.log('err: ', err);
    addStatus(form, 'Unable connect to server URL address !!!', 10000, 'rgb(255, 100, 10)');
  } else {
    console.log(err);
  }

};

