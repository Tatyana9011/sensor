/* eslint-disable strict */
'use strict';
import { saveDataJSON } from "../../../localStorage.js";
import routerNavigation from "../../../routerNavigation.js";
//import { dataArr } from "../../../../script.js";
import { arr } from './../resultEnd.js';

async function photo(userId, dataArr, data) {
  console.log('userId, dataArr, data: ', userId, dataArr, data);

  const reader = new FileReader();

  reader.addEventListener('load', e => {

    dataArr.forEach(item => {
      if (+item.id === +userId) {
        item.src = e.target.result;
      }
    });
    return dataArr;
  });

  reader.readAsDataURL(data);

  return dataArr;
}

export default photo;
