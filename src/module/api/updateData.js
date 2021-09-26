/* eslint-disable strict */
'use strict';

import { postData } from './api.js';
import resultEnd from './resultEnd.js';
import { getDataStorage } from '../localStorage.js';
import { error } from './error.js';
import btnExit from '../btnExit.js';
import addStatus from '../addStatus.js';
import creatLoader from '../creatLoader.js';

const updateData = form => {
  console.log('updateData: ');

  const getData = getDataStorage('name');
  const URL = getDataStorage('URL');
  const loader = creatLoader();

  addStatus(form, loader.outerHTML, 60000, 'green');
  postData(URL, getData.tokenValue)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Unable connect to server URL address !!!');
      }
      return (response.text());
    })
    .then(resultEnd)
    .then(btnExit)
    .catch(error.bind(this, form));
};

export default updateData;
