/* eslint-disable strict */
'use strict';

import deletePhoto from "../../../api/apiUser/photoApi/deletePhoto.js";

function formPreview(id, e) {

  const formPreviewDiv = document.getElementById('formPreview');
  const idPreview = formPreviewDiv.dataset.id;

  if (+id === +idPreview) {
    formPreviewDiv.innerHTML = `
    <img src="${e.target.result}" alt="Photo">
    <button type="button" class="btn-close delete-photo" aria-label="Close"></button>
    `;
  }

  const deletePhotoBtn = document.querySelector('.delete-photo');

  if (deletePhotoBtn) {
    deletePhotoBtn.addEventListener('click', event => {
      event.preventDefault();

      deletePhoto(id, formPreviewDiv);
    });
  }





}

export default formPreview;

