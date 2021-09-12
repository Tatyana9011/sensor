/* eslint-disable strict */
'use strict';

function creatLoader() {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  loader.innerHTML = `
  <div class="loader">
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
  </div>
  `;
  return loader;
}

export default creatLoader;
