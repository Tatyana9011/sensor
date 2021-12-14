/* eslint-disable strict */
'use strict';

import { postDataUsers } from '../api.js';
import resultEnd from './resultEnd.js';
import { getDataStorage } from '../../localStorage.js';
import { error } from '../error.js';
import btnExit from '../../btnExit.js';
import addStatus from '../../addStatus.js';
import creatLoader from '../../createPage/createComponent/assets/creatLoader.js';
import errorProcessing from "../errorProcessing.js";

const updateData = (form, page = 1, portionNumber = 1, userType = 'CLIENT') => {
  console.log('updateData: ');

  const getData = getDataStorage('name');
  const URL = getDataStorage('URL');
  const loader = creatLoader();
  let message = '';
  //URL, token, userType = '', pageSize = 10, pageNumber = 0, returnTotalCount = false, userState = ''
  addStatus(form, loader.outerHTML, 10000, 'green');
  postDataUsers(URL, getData.tokenValue, userType, 10, page, true, '')
    .then(res => message = errorProcessing(form, res))
    .then(resultEnd.bind(this, form, page, portionNumber))
    .catch(error.bind(this, form, message))
    .finally(btnExit);
};

export default updateData;
