/* eslint-disable strict */
'use strict';

import updateDataType from "../../../createPage/createComponent/userComponent/updateDataType.js";

const responseDeletePhoto = (formPreview, data) => {
  console.log('responseDeletePhoto: ');

  formPreview.innerHTML = `<img alt='UserPhoto' class='img-avatar unnamed' src='./img/unnamed.jpg' />`;

  updateDataType();
};

export default responseDeletePhoto;
