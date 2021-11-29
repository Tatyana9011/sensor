/* eslint-disable strict */
'use strict';
import { serverDeletePhoto } from "../../api.js";
import { getDataStorage } from "../../../localStorage.js";
import { error } from "../../error.js";
import errorProcessing from "../../errorProcessing.js";
import responseDeletePhoto from "./responseDeletePhoto.js";

function deletePhoto(id, formPreview) {
  console.log('deletePhoto: ');
  const form = document.querySelector('.form-add-photo');

  if (formPreview.querySelector('img')) {
    const token = getDataStorage('name').tokenValue;
    const URL = getDataStorage('URL');
    serverDeletePhoto(URL, token, id)
      .then(res => errorProcessing(res))
      .then(responseDeletePhoto)
      .catch(error.bind(this, form, "Photo was not delete "));

  } else {
    formPreview.innerHTML = '';
  }


}

export default deletePhoto;

