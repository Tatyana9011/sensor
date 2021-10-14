/* eslint-disable strict */
'use strict';

import { saveDataJSON } from "../../../localStorage.js";
import routerNavigation from "../../../routerNavigation.js";

const resolt = arr => {
  console.log('arr: ', arr);
  //saveDataJSON('data', arr);
  routerNavigation(arr);
};

export default resolt;
