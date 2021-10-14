/* eslint-disable strict */
'use strict';
import creatSensorPage from "../../createPage/creatSensorPage.js";
import { saveDataJSON, getDataStorage } from "../../localStorage.js";
import routerNavigation from '../../routerNavigation.js';
import getPhoto from "./photoApi/getPhoto.js";
import { photoIdentifier } from "../api.js";
import responsePhoto from "./photoApi/responsePhoto.js";
import { error } from "../error.js";
import photo from "./photoApi/photo.js";
import saveDataImg from "./photoApi/saveDataImg.js";


export const arr = [];

async function resultEnd(form, userId, token, data) {
  console.log('resultEnd: ');

  const login = document.querySelector('.login');
  const wrapper = document.querySelector('.wrapper');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const newData = JSON.parse(data);
  //saveDataJSON('data', getData);

  if (login) {
    login.remove();
  }

  if (modalBackdrop) {
    modalBackdrop.remove();
  }

  wrapper.innerHTML = '';
  wrapper.append(creatSensorPage());

  const URL = getDataStorage('URL');

  newData.forEach(obj => {
    if (obj.avatarUrl) {
      const identifier = obj.avatarUrl.replace(/rest%2FResource%2Fphoto%2F/, '');
      photoIdentifier(URL, token, obj.id, identifier)
        .then(response => {
          if (response.status !== 200) {
            throw 'Unable connect to server URL address !!!';
          }
          return (response.blob());
        })
        .then(responsePhoto.bind(this, obj.id))
        .catch(error.bind(this, form));
    }
  });


  routerNavigation(newData);


};

export default resultEnd;
