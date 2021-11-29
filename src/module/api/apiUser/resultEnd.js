/* eslint-disable strict */
'use strict';
import creatSensorPage from "../../createPage/creatSensorPage.js";
import { saveDataJSON, getDataStorage } from "../../localStorage.js";
import routerNavigation from '../../routerNavigation.js';
import { photoIdentifier } from "../api.js";
import responsePhoto from "./photoApi/responsePhoto.js";
import { error } from "../error.js";


function resultEnd(form, userId, token, data) {
  console.log('form, userId, token, data: ', form, userId, token, data);
  console.log('resultEnd: ');

  const login = document.querySelector('.login');
  const wrapper = document.querySelector('.wrapper');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const newData = JSON.parse(data);
  saveDataJSON('data', newData);

  if (login) {
    login.remove();
  }

  if (modalBackdrop) {
    modalBackdrop.remove();
  }

  wrapper.innerHTML = '';
  wrapper.append(creatSensorPage());
  routerNavigation(newData);

  const userPhoto = newData.find(item => item.id === userId);

  if (userPhoto.avatarUrl) {

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
