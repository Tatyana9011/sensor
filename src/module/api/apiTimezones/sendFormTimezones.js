/* eslint-disable strict */
'use strict';
import creatLoader from '../../createPage/createComponent/assets/creatLoader.js';
import addStatus from '../../addStatus.js';
import { timezonesPost } from '../api.js';
import { getDataStorage } from '../../localStorage.js';
import { error } from '../error.js';
import timezonesPage from '../../createPage/timezonesPage.js';
import errorProcessing from '../errorProcessing.js';

const sendFormTimezones = () => {

  const loader = creatLoader();
  const URL = getDataStorage('URL');
  const form = document.getElementById('updateUsers');

  addStatus(form, loader.outerHTML, 10000, 'green');

  timezonesPost(URL)
    .then(res => errorProcessing(form, res))
    .then(timezonesPage)
    .catch(error.bind(this, form));
};

export default sendFormTimezones;
