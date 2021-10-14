/* eslint-disable strict */
'use strict';
import { serverDeletePhoto } from "../../api.js";
import updateData from "../updateData.js";
import { getDataStorage } from "../../../localStorage.js";

function deletePhoto(id, token, target, formPreview) {

  console.log('id, token, target: ', id, token, target);

  const btnDeletePhoto = formPreview.querySelector('.delete-photo');

  btnDeletePhoto.addEventListener('click', event => {
    event.preventDefault();

    if (target.src.match(/data/)) {

      const URL = getDataStorage('URL');
      serverDeletePhoto(URL, token, id);

      const form = document.getElementById('updateUsers');
      updateData(form);
    } else {
      formPreview.innerHTML = '';
    }
  });


}

export default deletePhoto;

