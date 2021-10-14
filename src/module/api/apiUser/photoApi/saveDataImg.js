/* eslint-disable strict */
'use strict';
import { saveDataJSON, getDataStorage } from "../../../localStorage.js";
import routerNavigation from "../../../routerNavigation.js";


const saveDataImg = () => {
  console.log('saveDataImg: ');

  /* console.log('saveDataImg: ');
  function getBase64(item) {
    const reader = new FileReader();
    return new Promise(resolve => {
      reader.onload = ev => {
        if (+item.id === +id) {
          item.src = ev.target.result;
        }
        resolve(ev.target.result);
      };
      reader.readAsDataURL(data);
    });
  }
  const promises = [];

  // loop through fileList with for loop
  for (let i = 0; i < dataArr.length; i++) {
    promises.push(getBase64(dataArr[i]));
  }

  // array with base64 strings
  return await Promise.all(promises);


 */


  /* if (arr) {
    saveDataJSON('data', arr);
  } */


  /* console.log('saveDataImg ');
  const data = getDataStorage('data');

  const imgSrc = [];

  const tr = document.querySelectorAll('tr');
  tr.forEach(row => {
    const td = row.children;

    if (td.item(2) && td.item(2).textContent !== "Photo") {
      imgSrc.push({
        'id': td.item(0).dataset.id,
        'src': td.item(2).querySelector('img').src
      });
    }
  });

  // console.log('data: ', data);
  const newData = data.forEach((item, i) => {
    //console.log('item, i: ', item);
    // item.src = imgSrc[i].src
    //console.log('imgSrc[i].src: ', imgSrc[i].src);
  });
  //console.log('newData: ', newData);
  //saveDataJSON('newData', JSON.stringify(newData));
  //console.log('JSON.stringify(newData): ', JSON.stringify(newData));
 */
};

export default saveDataImg;
