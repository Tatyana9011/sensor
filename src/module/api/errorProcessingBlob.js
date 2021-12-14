/* eslint-disable strict */
'use strict';

import addStatus from "../addStatus.js";

const errorProcessingBlob = (res, form) => {
  if (res.status === 500) {
    return res.text();
  } else if (res.status >= 400 && res.status < 500) {
    addStatus(form, `FSH server temporary unavailable code: ${res.status}`, 30000, 'rgb(255, 100, 10)');
    return;
  } else if (res.status > 500) {
    addStatus(form, `System error occurred ${res.status}: ${res.statusText}`, 30000, 'rgb(255, 100, 10)');
    return;
  }

  return res.blob();
};

export default errorProcessingBlob;
