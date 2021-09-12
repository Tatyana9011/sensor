/* eslint-disable strict */
'use strict';
import updateData from './updateData.js';

const resultRow = (form, body, data) => {

  if (data) {
    updateData(form);
  }

};

export default resultRow;
