/* eslint-disable strict */
'use strict';

import { getDataStorage } from "../../../localStorage.js";
import deletePhoto from "./deletePhoto.js";
import formPreview from "../../../createPage/createComponent/userComponent/formPreview.js";

const responsePhoto = (id, dataImg) => {
  console.log('responsePhoto: ');
  if (dataImg) {
    const imageAvatar = document.querySelector('.avatar');
    const reader = new FileReader();
    const userId = getDataStorage('name').userId;

    reader.addEventListener('load', e => {

      if (e.target.result) {
        if (Number(id) === Number(userId)) {
          imageAvatar.src = e.target.result;
        }

        const formPreviewDiv = document.getElementById('formPreview');
        if (formPreviewDiv) {
          formPreview(id, e);

          const deletePhotoBtn = document.querySelector('.delete-photo');

          deletePhotoBtn.addEventListener('click', event => {
            event.preventDefault();
            deletePhoto(id, formPreviewDiv);
          });
        }

      } else {
        console.log('----e.target.result фото пришо но не загрузилось');
      }

    });

    reader.readAsDataURL(dataImg);
  } else {
    console.log('----e.target.result фото не пришло с сервера');
  }


};

export default responsePhoto;
