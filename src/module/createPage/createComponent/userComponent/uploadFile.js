/* eslint-disable strict */
'use strict';

import submitPhoto from "./submitPhoto.js";
import deletePhoto from "../../../api/apiUser/photoApi/deletePhoto.js";

function uploadFile(file, content, id, token, target) {
  console.log('uploadFile: ');

  const formImage = document.getElementById('formImage');
  const form = document.querySelector('.form-add-photo');
  const formPreview = document.getElementById('formPreview');
  const saveChanges = document.getElementById('saveChanges');
  saveChanges.setAttribute('disabled', 'true');

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
    formPreview.innerHTML = `
    <img src="${e.target.result}" alt="Photo">
    <button type="button" class="btn-close position-absolute top-2 end-0 delete-photo" aria-label="Close"></button>
    `;
    saveChanges.classList.remove('btn-outline-primary');
    saveChanges.classList.add('btn-primary');
    saveChanges.removeAttribute('disabled');
    submitPhoto(form, id, token);
    deletePhoto(id, token, target, formPreview);
  };

  reader.onerror = () => {
    saveChanges.classList.add('btn-outline-primary');
    saveChanges.classList.remove('btn-primary');
    content.log('Ошибка');
  };

  reader.readAsDataURL(file);


}

export default uploadFile;

