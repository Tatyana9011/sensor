/* eslint-disable strict */
'use strict';
import updateData from "../api/apiUser/updateData.js";

const handleMessage = message => {
  if (message.data.commandName === "USERLIST_REFRESHED") {
    const form = document.getElementById('updateUsers');
    updateData(form);
  }
};

export default handleMessage;
