/* eslint-disable strict */
'use strict';

const errorProcessing = res => {
  let message = '';

  if (res.status === 500) {
    //get msg from json localizedmsg
    message = res.text();
    return message;
  } else if (res.status >= 400 && res.status < 500) {
    //FSH server temporary unavailable code
    message = `FSH server temporary unavailable code: ${res.status}`;
    return message;
  } else if (res.status > 500) {
    //system error occurred code text
    message = `System error occurred ${res.status}: ${res.statusText}`;
    return message;
  }

  return (res.text());
};

export default errorProcessing;
