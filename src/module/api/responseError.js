/* eslint-disable strict */
'use strict';
import addStatus from "../addStatus.js";

const responseError = (form, str) => {
  console.log('form, str: ', form, str);
  console.log('responseError: ');
  const massage = str.replace(/[0-9]/ig, '');

  if (massage !== "true" && massage) {
    const text = JSON.parse(str);
    if (text.localizedMsg.match(/^error_/)) {
      addStatus(form, text.rawMsg, 10000, 'rgb(255, 100, 10)');
    } else {
      addStatus(form, text.localizedMsg, 10000, 'rgb(255, 100, 10)');
    }

  }
};

export default responseError;
