/* eslint-disable strict */
'use strict';

import { getDataStorage } from "../../../localStorage.js";
import formPreview from "../../../createPage/createComponent/userComponent/formPreview.js";
import responseError from "../../responseError.js";

const responsePhoto = (id, formAddPhoto, dataImg) => {
  if (dataImg && responseError(formAddPhoto, dataImg)) {
    const imageAvatar = document.querySelector('.avatar');
    const reader = new FileReader();
    const userId = getDataStorage('name').userId;

    reader.addEventListener('load', e => {

      if (e.target.result) {
        if (Number(id) === Number(userId)) {
          imageAvatar.src = e.target.result;
        }

        const formPreviewDiv = document.getElementById('formPreview');
        if (formAddPhoto && formPreviewDiv) {
          formPreview(id, e);
        }

      } else {
        console.log('----e.target.result фото пришо но не загрузилось');
      }

    });

    reader.readAsDataURL(dataImg);

  }


};

export default responsePhoto;
