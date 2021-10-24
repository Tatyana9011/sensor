/* eslint-disable strict */
'use strict';

import creatModalDetails from "../modal/creatModalDetails.js";
import uploadFile from "./uploadFile.js";
import { getDataStorage } from "../../../localStorage.js";
import { photoIdentifier } from "../../../api/api.js";
import responsePhoto from "../../../api/apiUser/photoApi/responsePhoto.js";
import { error } from "../../../api/error.js";

function details(id, token, target) {
  console.log('details: ');
  const data = getDataStorage('data');
  const modalDialog = document.querySelector('.modal-dialog');

  const content = creatModalDetails(target);

  modalDialog.innerHTML = '';
  modalDialog.append(content);

  const saveChanges = document.getElementById('saveChanges');
  saveChanges.setAttribute('disabled', 'true');

  const formImage = document.getElementById('formImage');
  const user = data.find(item => +item.id === +id);
  console.log('user: ', user);
  if (user.avatarUrl) {
    const URL = getDataStorage('URL');
    const identifier = user.avatarUrl.replace(/rest%2FResource%2Fphoto%2F/, '');
    photoIdentifier(URL, token, user.id, identifier)
      .then(response => {
        if (response.status !== 200) {
          throw 'Unable connect to server URL address !!!';
        }
        return (response.blob());
      })
      .then(responsePhoto.bind(this, user.id))
      .catch(error.bind(this, null, "Photo was not loaded "));
  }

  formImage.addEventListener('change', e => {
    e.preventDefault();
    uploadFile(formImage.files[0], content, id, token, target);
  });

}

export default details;

