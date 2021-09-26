/* eslint-disable strict */
'use strict';

function getewaysModelsPage() {
  const getewaysModelsContent = document.createElement('div');
  const arrClass = ['col-sm-12', 'col-xl-12', 'mb-5', 'pe-xl-5', 'pe-md-4', 'px-sm-3'];
  getewaysModelsContent.classList.add(...arrClass);
  getewaysModelsContent.innerHTML = `
  
                 <div > <h1>Geteways Modal page</h1></div>

  `;
  return getewaysModelsContent;

}

export default getewaysModelsPage;
