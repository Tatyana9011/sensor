/* eslint-disable strict */
'use strict';

import creatModalDetails from "../modal/creatModalDetails.js";
import uploadFile from "./uploadFile.js";
import { getDataStorage } from "../../../localStorage.js";
import { photoIdentifier } from "../../../api/api.js";
import responsePhoto from "../../../api/apiUser/photoApi/responsePhoto.js";
import { error } from "../../../api/error.js";
import errorProcessingBlob from "../../../api/errorProcessingBlob.js";
import state from "../../../include/state.js";

function details(id, token, target) {
  const data = state.usersData;
  const modalDialog = document.querySelector('.modal-dialog');

  const content = creatModalDetails(target);

  modalDialog.innerHTML = '';
  modalDialog.append(content);

  const form = document.querySelector('.form-add-photo');
  const formPreview = document.getElementById('formPreview');
  formPreview ? formPreview.setAttribute('data-id', id) : '';

  const saveChanges = document.getElementById('saveChanges');
  saveChanges.setAttribute('disabled', 'true');

  let message = '';
  const user = data.users.find(item => +item.id === +id);

  const formImage = document.getElementById('formImage');

  formImage.addEventListener('change', e => {
    e.preventDefault();
    uploadFile(formImage.files[0], content, id, token, target);
  });

  if (user.avatarUrl) {
    const URL = getDataStorage('URL');
    const identifier = user.avatarUrl.replace(/rest%2FResource%2Fphoto%2F/, '');
    photoIdentifier(URL, token, user.id, identifier)
      .then(res => message = errorProcessingBlob(res, form))
      .then(responsePhoto.bind(this, user.id, form))
      .catch(error.bind(this, form, message));
  }



}

export default details;

