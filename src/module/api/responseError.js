/* eslint-disable strict */
'use strict';
import addStatus from "../addStatus.js";

const responseError = (form, str) => {
  console.log('form, str: ', form, str);
  console.log('responseError: ');

  const getForm = form ? form : document.getElementById('updateUsers');
  const massage = str.replace(/[0-9]/ig, '');
  const text = JSON.parse(str);

  if (massage !== "true" && massage) {
    if (text.localizedMsg.match(/^error_/)) {
      addStatus(getForm, text.rawMsg, 10000, 'rgb(255, 100, 10)');
    } else {
      addStatus(getForm, text.localizedMsg, 10000, 'rgb(255, 100, 10)');
    }
  }
};

export default responseError;
