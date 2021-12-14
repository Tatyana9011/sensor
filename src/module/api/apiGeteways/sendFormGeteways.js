/* eslint-disable strict */
'use strict';
import creatLoader from '../../createPage/createComponent/assets/creatLoader.js';
import addStatus from '../../addStatus.js';
import { manageDevices } from '../api.js';
import { getDataStorage } from '../../localStorage.js';
import { error } from '../error.js';
import getewaysUsers from '../../createPage/createComponent/getewaysComponent/getewaysUsers.js';
import errorProcessing from '../errorProcessing.js';

const sendFormGeteways = () => {

  const loader = creatLoader();
  const URL = getDataStorage('URL');
  const form = document.getElementById('updateUsers');
  const getData = getDataStorage('name');

  addStatus(form, loader.outerHTML, 10000, 'green');

  manageDevices(URL, getData.tokenValue)
    .then(res => errorProcessing(form, res))
    .then(getewaysUsers)
    .catch(error.bind(this, form));
};

export default sendFormGeteways;
