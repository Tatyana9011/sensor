/* eslint-disable strict */
'use strict';
import { serverDeletePhoto } from "../../api.js";
import { getDataStorage } from "../../../localStorage.js";
import { error } from "../../error.js";
import errorProcessingBlob from "../../errorProcessingBlob.js";
import responseDeletePhoto from "./responseDeletePhoto.js";

function deletePhoto(id, formPreview) {
  console.log('deletePhoto: ');
  const form = document.querySelector('.form-add-photo');
  let massage = '';
  if (formPreview.querySelector('img')) {
    const token = getDataStorage('name').tokenValue;
    const URL = getDataStorage('URL');
    serverDeletePhoto(URL, token, id)
      .then(res => massage = errorProcessingBlob(res, form))
      .then(responseDeletePhoto.bind(this, formPreview))
      .catch(error.bind(this, form, massage));

  } else {
    formPreview.innerHTML = `<img alt='UserPhoto' class='img-avatar unnamed' src='./img/unnamed.jpg' />`;
  }


}

export default deletePhoto;

