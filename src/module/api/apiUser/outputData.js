/* eslint-disable strict */
'use strict';
import { saveDataJSON, getDataStorage } from "../../localStorage.js";
import updateData from "./updateData.js";
import websocket from "../../websocket/websocket.js";
import addStatus from "../../addStatus.js";
import creatSensorPage from "../../createPage/creatSensorPage.js";
import toggleNavBar from "../../createPage/createComponent/createTable/toggleNavBar.js";

const outputData = (form, body, topic, data) => {
  console.log('form, body, topic, data: ', form, body, topic, data);
  console.log('outputData: ');
  if (JSON.parse(data).userState === "WRONG_HUB") {

    const message = "WRONG_HUB";
    addStatus(form, message, 60000, 'rgb(255, 100, 10)');

  } else if (JSON.parse(data).userState === "ACTIVE") {

    saveDataJSON('name', JSON.parse(data));
    saveDataJSON('URL', body.URL);

    form.reset();

    const btnSubmit = form.querySelector('button[type="submit"]');
    if (btnSubmit) {
      btnSubmit.setAttribute('disabled', 'true');
      btnSubmit.classList.remove('btn-primary');
      btnSubmit.classList.add('btn-secondary');
    }

    setTimeout(() => {
      const loaderHtml = document.querySelector('.preloader');
      if (loaderHtml) {
        loaderHtml.remove();
      }

      const modal = form.closest('.popup');
      if (modal) {
        modal.style.display = 'none';
      }
    }, 3000);

    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = '';
    wrapper.append(creatSensorPage());
    const title = ['Clients', 'Administrators', 'External'];
    toggleNavBar(title);

    updateData(form);
    websocket(getDataStorage('URL'));
  }

};

export default outputData;
