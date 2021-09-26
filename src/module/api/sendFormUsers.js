/* eslint-disable strict */
'use strict';

import addStatus from '../addStatus.js';
import { authData, putUserData, deleteUserData } from './api.js';
import creatLoader from '../creatLoader.js';
import { getDataStorage } from '../localStorage.js';
import resultRow from './resultRow.js';
import { error } from './error.js';
import outputData from './outputData.js';
import updateData from './updateData.js';

const sendForm = (form, body) => {
  const loader = creatLoader();

  /* https://jsonplaceholder.typicode.com//posts/1  фейковое апи*/
  //http://192.168.99.244:9993/fsh/rest/Auth/loginSync?username=adminfsh&password=qwerty

  if (form) {
    addStatus(form, loader.outerHTML, 60000, 'green');
    if (form.getAttribute('name') === 'authorization') {
      authData(body.URL, body)
        .then(response => {
          if (response.status !== 200) {
            throw 'Unable connect to server URL address !!!';
          }
          return (response.text());
        })
        .then(outputData.bind(this, form, body))
        .catch(error.bind(this, form));
    }

    if (form.getAttribute('name') === 'row') {
      addStatus(form, loader.outerHTML, 60000, 'green');
      const URL = getDataStorage('URL');
      const getData = getDataStorage('name');
      putUserData(URL, body, getData.tokenValue)
        .then(response => {
          if (response.status !== 200) {
            throw 'Unable connect to server URL address !!!';
          }
          return (response.text());
        })
        .then(resultRow.bind(this, form, body))
        .catch(error.bind(this, form));
      /*if (body.file.name !== '') {
        loadPhotoMultipart(URL, getData.tokenValue, { 'file': body.file })
         .then(response => {
          if (response.status !== 200) {
            throw 'Unable connect to server URL address !!!';
          }
          return (response.text());
        })
        .then(resultRow.bind(this, form, body))
        .catch(error.bind(this, form)); 
      }*/
    }
    if (form.getAttribute('name') === 'delete') {
      addStatus(form, loader.outerHTML, 60000, 'green');
      const URL = getDataStorage('URL');
      const getData = getDataStorage('name');
      deleteUserData(URL, getData.tokenValue, body)
        .then(response => {
          if (response.status !== 200) {
            throw 'Unable connect to server URL address !!!';
          }
          return (response.text());
        })
        .then(updateData.bind(this, form))
        .catch(error.bind(this, form));
    }
  }
};

export default sendForm;
