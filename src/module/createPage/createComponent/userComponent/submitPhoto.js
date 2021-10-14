/* eslint-disable strict */
'use strict';
import getPhoto from "../../../api/apiUser/photoApi/getPhoto.js";


function submitPhoto(form, id, token) {

  form.addEventListener('submit', event => {

    event.preventDefault();

    const formImage = document.getElementById('formImage');
    const formData = new FormData(form);

    formData.append('file', formImage.files[0]);

    getPhoto(form, formData, id, token);

  });

}

export default submitPhoto;
