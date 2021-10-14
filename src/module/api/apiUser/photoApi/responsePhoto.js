/* eslint-disable strict */
'use strict';

import { getDataStorage } from "../../../localStorage.js";
import saveDataImg from './saveDataImg.js';

const responsePhoto = (id, dataImg) => {
  console.log('responsePhoto: ');
  const imageAvatar = document.querySelector('.avatar');
  const reader = new FileReader();
  const userId = getDataStorage('name').userId;

  reader.addEventListener('load', e => {

    if (Number(id) === Number(userId)) {
      imageAvatar.src = e.target.result;
    }

    const td = document.querySelector(`td[data-id="${id}"]`);
    const row = td.closest('tr');
    const img = row.querySelector('img');
    img.src = e.target.result;
  });

  reader.readAsDataURL(dataImg);

};

export default responsePhoto;
