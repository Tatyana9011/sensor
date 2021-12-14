/* eslint-disable strict */
'use strict';
import { saveDataJSON, getDataStorage } from "../../localStorage.js";
import updateData from "./updateData.js";
import websocket from "../../websocket/websocket.js";
import addStatus from "../../addStatus.js";
import creatSensorPage from "../../createPage/creatSensorPage.js";
import toggleNavBar from "../../createPage/createComponent/createTable/toggleNavBar.js";
import addPhotoUsers from "./addPhotoUsers.js";
import modal from "../../modal.js";

const outputData = (form, body, topic, data) => {
  if (JSON.parse(data).userState === "WRONG_HUB") {

    const message = "WRONG_HUB";
    addStatus(form, message, 10000, 'rgb(255, 100, 10)');

  } else if (JSON.parse(data).userState === "ACTIVE") {

    saveDataJSON('name', JSON.parse(data));
    saveDataJSON('URL', body.URL);

    form.reset();

    setTimeout(() => {
      const loaderHtml = document.querySelector('.preloader');
      if (loaderHtml) {
        loaderHtml.remove();
      }
    }, 3000);

    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = '';
    wrapper.append(creatSensorPage());
    const sensor = document.querySelector('.sensor');
    sensor.append(modal());

    const formUsers = document.getElementById('updateUsers');
    addPhotoUsers(formUsers);
    toggleNavBar();
    const root = document.documentElement;
    root.style.setProperty("--translate-filters-slider", 0);

    updateData(form);
    websocket(getDataStorage('URL'));
  }

};

export default outputData;
