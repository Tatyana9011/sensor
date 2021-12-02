/* eslint-disable strict */
'use strict';

import { saveDataJSON, getDataStorage } from "../../localStorage.js";
import routerNavigation from '../../routerNavigation.js';
import { photoIdentifier } from "../api.js";
import responsePhoto from "./photoApi/responsePhoto.js";
import { error } from "../error.js";


function resultEnd(form, userId, token, page = 1, portionNumber = 1, data) {
  console.log('resultEnd: ');

  const login = document.querySelector('.login');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const newData = JSON.parse(data);
  saveDataJSON('data', newData);

  if (login) {
    login.remove();
  }

  if (modalBackdrop) {
    modalBackdrop.remove();
  }

  routerNavigation(newData, page, portionNumber);

  const userPhoto = newData.users.find(item => item.id === userId);

  const body = document.querySelector('body');
  body.style.overflowY = "scroll";

  if (userPhoto && userPhoto.avatarUrl) {

    const URL = getDataStorage('URL');
    const identifier = userPhoto.avatarUrl.replace(/rest%2FResource%2Fphoto%2F/, '');
    photoIdentifier(URL, token, userPhoto.id, identifier)
      .then(response => {
        if (response.status !== 200) {
          throw 'Unable connect to server URL address !!!';
        }
        return (response.blob());
      })
      .then(responsePhoto.bind(this, userPhoto.id))
      .catch(error.bind(this, form, "Photo was not loaded "));
  }

}

export default resultEnd;
