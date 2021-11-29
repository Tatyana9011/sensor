/* eslint-disable strict */
'use strict';

import { generateRandom } from "../api.js";
import logIn from "../../authorization.js";
import errorProcessing from "../errorProcessing.js";

const random = () => {

  generateRandom()
    .then(res => errorProcessing(res))
    .then(logIn)
    .catch(e => console.log('random', e));

};

export default random;
