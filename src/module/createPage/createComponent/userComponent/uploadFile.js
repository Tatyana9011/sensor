/* eslint-disable strict */
'use strict';

import submitPhoto from "./submitPhoto.js";
import deletePhoto from "../../../api/apiUser/photoApi/deletePhoto.js";
import formPreview from "./formPreview.js";

function uploadFile(file, content, id, token, target) {
  console.log('uploadFile: ');

  const formImage = document.getElementById('formImage');
  const form = document.querySelector('.form-add-photo');
  const formPreviewDiv = document.getElementById('formPreview');
  const saveChanges = document.getElementById('saveChanges');

  if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    content.log('Разрешено только изображение');
    formImage.value = '';
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    content.log("Файл должен быть менее 2 МБ.");
    return;
  }

  const reader = new FileReader();
  reader.onload = e => {
    formPreview(id, e);

    saveChanges.classList.remove('btn-outline-primary');
    saveChanges.classList.add('btn-primary');
    saveChanges.removeAttribute('disabled');
    const deletePhotoBtn = document.querySelector('.delete-photo');

    submitPhoto(form, id, token);

    deletePhotoBtn.addEventListener('click', event => {
      event.preventDefault();
      deletePhoto(id, formPreviewDiv);
    });
  };

  reader.onerror = () => {
    saveChanges.classList.add('btn-outline-primary');
    saveChanges.classList.remove('btn-primary');
    content.log('Ошибка');
  };

  reader.readAsDataURL(file);


}

export default uploadFile;

