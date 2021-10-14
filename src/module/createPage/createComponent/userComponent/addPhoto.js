/* eslint-disable strict */
'use strict';

import creatModalAddPhoto from "../modal/creatModalAddPhoto.js";
import uploadFile from "./uploadFile.js";
import deletePhoto from "../../../api/apiUser/photoApi/deletePhoto.js";

function addPhoto(id, token, target) {
  console.log('addPhoto: ');

  const modalDialog = document.querySelector('.modal-dialog');

  const content = creatModalAddPhoto();

  modalDialog.innerHTML = '';
  modalDialog.append(content);

  const formImage = document.getElementById('formImage');
  const formPreview = document.getElementById('formPreview');

  if (target.src.match(/data/)) {
    formPreview.innerHTML = `
    <img src="${target.src}" alt="Photo">
    <button type="button" class="btn-close position-absolute top-2 end-0 delete-photo" aria-label="Close" ></button>
    `;
    deletePhoto(id, token, target, formPreview);
  }

  formImage.addEventListener('change', e => {
    e.preventDefault();
    uploadFile(formImage.files[0], content, id, token, target);
  });

}

export default addPhoto;

