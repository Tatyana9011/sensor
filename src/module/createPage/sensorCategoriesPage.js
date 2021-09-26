/* eslint-disable strict */
'use strict';

function sensorCategoriesPage() {
  const sensorCategoriesContent = document.createElement('div');
  const arrClass = ['col-sm-12', 'col-xl-12', 'mb-5', 'pe-xl-5', 'pe-md-4', 'px-sm-3'];
  sensorCategoriesContent.classList.add(...arrClass);
  sensorCategoriesContent.innerHTML = ` <div > <h1>Sensor categories page</h1></div>  `;
  return sensorCategoriesContent;

}

export default sensorCategoriesPage;
