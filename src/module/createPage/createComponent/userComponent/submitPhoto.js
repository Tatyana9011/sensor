/* eslint-disable strict */
'use strict';
import getPhoto from "../../../api/apiUser/photoApi/getPhoto.js";
import state from "../../../include/state.js";


export const photo = (form, id, token, event) => {
  event.preventDefault();

  const formImage = document.getElementById('formImage');
  const formData = new FormData(form);

  formData.append('file', formImage.files[0]);

  getPhoto(form, formData, id, token);
};

function submitPhoto(form, id, token) {
  if (state.isListener === false) {
    state.isListener = true;
    form.addEventListener('submit', photo.bind(this, form, id, token));
  }

}

export default submitPhoto;
