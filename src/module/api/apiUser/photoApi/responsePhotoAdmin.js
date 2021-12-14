/* eslint-disable strict */
'use strict';

import addStatus from "../../../addStatus.js";
import responseError from "../../responseError.js";
const responsePhotoAdmin = (form, dataImg) => {
  if (dataImg && responseError(form, dataImg)) {
    const imageAvatar = document.querySelector('.avatar');
    const reader = new FileReader();

    reader.addEventListener('load', e => {

      if (e.target.result) {

        imageAvatar.src = e.target.result;

      } else {
        console.log('----e.target.result фото пришо но не загрузилось');
      }

    });

    reader.readAsDataURL(dataImg);

  } else {
    addStatus(form, `Фото не пришло с сервера`, 10000, 'rgb(255, 100, 10)');
    console.log('----e.target.result фото не пришло с сервера');
  }


};

export default responsePhotoAdmin;
