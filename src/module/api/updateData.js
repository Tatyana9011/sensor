/* eslint-disable strict */
'use strict';

import { postData } from './api.js';
import resultEnd from './resultEnd.js';
import { getDataStorage } from '../localStorage.js';
import { error } from './error.js';

const updateData = form => {

  const getData = getDataStorage('name');
  const URL = getDataStorage('URL');

  postData(URL, getData.tokenValue)
    .then(response => {
      if (response.status !== 200) {
        throw 'Unable connect to server URL address !!!';
      }
      return (response.text());
    })
    .then(resultEnd)
    .catch(error.bind(this, form));
};

export default updateData;
