/* eslint-disable strict */
'use strict';

import { getDataStorage } from "../../localStorage.js";
import { rawPhotoContent } from "../api.js";
import responsePhotoAdmin from "./photoApi/responsePhotoAdmin.js";
import { error } from "../error.js";
import errorProcessingBlob from "../errorProcessingBlob.js";

function addPhotoUsers(form) {
  console.log('form: ', form);
  console.log('addPhotoUsers: ');
  const name = getDataStorage('name');
  let message = '';

  const URL = getDataStorage('URL');
  //URL, token, id //получаем фото с сервера
  rawPhotoContent(URL, name.tokenValue, name.userId)
    .then(res => message = errorProcessingBlob(res, form))
    .then(responsePhotoAdmin.bind(this, form))
    .catch(error.bind(this, form, message));

}

export default addPhotoUsers;
