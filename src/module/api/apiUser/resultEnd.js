/* eslint-disable strict */
'use strict';

import routerNavigation from '../../routerNavigation.js';
import addStatus from "../../addStatus.js";
import responseError from "../responseError.js";
import state from "../../include/state.js";

function resultEnd(form, page = 1, portionNumber = 1, data) {
  const login = document.querySelector('.login');
  const newData = JSON.parse(data);

  if (login) {
    login.remove();
  }
  if (newData && responseError(form, data)) {

    newData.users.map(user => {
      const loginId = decodeURIComponent(user.login);
      user.login = loginId;
      const nameId = decodeURIComponent(user.name);
      user.name = nameId;
      const emailId = decodeURIComponent(user.email);
      user.email = emailId;
      const phoneId = decodeURIComponent(user.phone);
      user.phone = phoneId;
    });

    state.usersData = newData;

    routerNavigation(newData, page, portionNumber);

    const body = document.querySelector('body');
    body.style.overflowY = "scroll";

  } else {
    addStatus(form, data, 20000, 'rgb(255, 100, 10)');
  }
}

export default resultEnd;
