/* eslint-disable strict */
'use strict';
import updateDataType from "../createPage/createComponent/userComponent/updateDataType.js";

const handleMessage = message => {
  const titlePage = document.getElementById('title-page');
  titlePage.textContent = 'Users';
  if (message.data.commandName === "USERLIST_REFRESHED" && titlePage.textContent === 'Users') {
    updateDataType();

  }
};

export default handleMessage;
