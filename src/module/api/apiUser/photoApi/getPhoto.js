/* eslint-disable strict */
'use strict';

import { getDataStorage } from '../../../localStorage.js';
import { error } from '../../error.js';
import { loadPhotoMultipart } from '../../api.js';
import errorProcessingBlob from '../../errorProcessingBlob.js';
import responseError from '../../responseError.js';

const getPhoto = (form, body, id, token) => {
  const URL = getDataStorage('URL');
  let message = '';
  loadPhotoMultipart(URL, token, body, id)
    .then(res => message = errorProcessingBlob(res, form))
    .then(responseError.bind(this, form))
    .catch(error.bind(this, form, message));

};

export default getPhoto;
