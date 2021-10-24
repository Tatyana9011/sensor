/* eslint-disable strict */
'use strict';

import deletePhoto from "../../../api/apiUser/photoApi/deletePhoto.js";

function formPreview(id, e) {

  const formPreviewDiv = document.getElementById('formPreview');
  formPreviewDiv.innerHTML = `
    <img src="${e.target.result}" alt="Photo">
    <button type="button" class="btn-close delete-photo" aria-label="Close"></button>
    `;

  const deletePhotoBtn = document.querySelector('.delete-photo');
  const filePreviewImg = document.querySelector('.file__preview img');

  filePreviewImg.addEventListener('mouseenter', e => {

    deletePhotoBtn.style.opacity = '0';

  });
  filePreviewImg.addEventListener('mouseout', e => {

    deletePhotoBtn.style.opacity = '.5';

  });


  deletePhotoBtn.addEventListener('click', event => {
    event.preventDefault();

    deletePhoto(id, formPreviewDiv);
  });




}

export default formPreview;

