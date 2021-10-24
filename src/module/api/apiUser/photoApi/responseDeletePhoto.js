/* eslint-disable strict */
'use strict';

import updateData from "../updateData.js";

const responseDeletePhoto = data => {
  console.log('responseDeletePhoto: ');
  const form = document.getElementById('updateUsers');
  updateData(form);
};

export default responseDeletePhoto;
