/* eslint-disable strict */
'use strict';
import creatLoader from '../creatLoader.js';
import addStatus from '../addStatus.js';
import { timezonesPost } from './api.js';
import { getDataStorage } from '../localStorage.js';
import { error } from './error.js';
import timezonesPage from '../createPage/timezonesPage.js';


const sendFormTimezones = () => {

  const loader = creatLoader();
  const URL = getDataStorage('URL');
  const form = document.getElementById('updateUsers');

  addStatus(form, loader.outerHTML, 60000, 'green');

  timezonesPost(URL)
    .then(response => {
      if (response.status !== 200) {
        throw 'Unable connect to server URL address !!!';
      }
      return (response.text());
    })
    .then(timezonesPage)
    .catch(error.bind(this, form));
};

export default sendFormTimezones;
