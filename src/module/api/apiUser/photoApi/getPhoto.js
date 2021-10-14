/* eslint-disable strict */
'use strict';

import { getDataStorage } from '../../../localStorage.js';
import { error } from '../../error.js';
import { loadPhotoMultipart, rawPhotoContent } from '../../api.js';
import responsePhoto from './responsePhoto.js';

const getPhoto = (form, body, id, token) => {
  console.log('getPhoto: ');

  const URL = getDataStorage('URL');

  loadPhotoMultipart(URL, token, body, id)
    .then(response => {
      if (response.status !== 200) {
        throw 'Unable connect to server URL address !!!';
      }
      return (response.blob());
    })
    .then(rawPhotoContent.bind(this, URL, token, id))
    .then(response => {
      if (response.status !== 200) {
        throw 'Unable connect to server URL address !!!';
      }
      return (response.blob());
    })
    .then(responsePhoto.bind(this, id))
    .catch(error.bind(this, form));

};

export default getPhoto;
