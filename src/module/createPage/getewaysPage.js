/* eslint-disable strict */
'use strict';

function getewaysPage() {
  const getewaysContent = document.createElement('div');
  const arrClass = ['col-sm-12', 'col-xl-12', 'mb-5', 'pe-xl-5', 'pe-md-4', 'px-sm-3'];
  getewaysContent.classList.add(...arrClass);
  getewaysContent.innerHTML = `
  
                 <div > <h1>Geteways page</h1></div>

  `;
  return getewaysContent;

}

export default getewaysPage;
