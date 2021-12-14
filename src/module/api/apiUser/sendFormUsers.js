/* eslint-disable strict */
'use strict';

import addStatus from '../../addStatus.js';
import { authData, putUserData, deleteUserData } from '../api.js';
import creatLoader from '../../createPage/createComponent/assets/creatLoader.js';
import { getDataStorage } from '../../localStorage.js';
import { error } from '../error.js';
import outputData from './outputData.js';
import responseError from '../responseError.js';
import errorProcessing from '../errorProcessing.js';

const sendForm = (form, body, topic) => {
  const loader = creatLoader();
  let message = '';
  if (form) {

    addStatus(form, loader.outerHTML, 10000, 'green');

    if (form.getAttribute('name') === 'authorization') {
      authData(body.URL, body, topic)
        .then(res => message = errorProcessing(form, res))
        .then(outputData.bind(this, form, body, topic))
        .catch(error.bind(this, form, message));
    }

    if (form.getAttribute('name') === 'row') {

      addStatus(form, loader.outerHTML, 10000, 'green');

      const URL = getDataStorage('URL');
      const getData = getDataStorage('name');

      putUserData(URL, body, getData.tokenValue)
        .then(res => message = errorProcessing(form, res))
        .then(responseError.bind(this, form))
        .catch(error.bind(this, form, message));
    }
    if (form.getAttribute('name') === 'delete') {

      addStatus(form, loader.outerHTML, 10000, 'green');

      const URL = getDataStorage('URL');
      const getData = getDataStorage('name');

      deleteUserData(URL, getData.tokenValue, body)
        .then(res => message = errorProcessing(form, res))
        .then(responseError.bind(this, form))
        .catch(error.bind(this, form, message));
    }
  }
};

export default sendForm;
