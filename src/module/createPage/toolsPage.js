/* eslint-disable strict */
'use strict';

function toolsPage() {
  const toolsContent = document.createElement('div');
  const arrClass = ['col-sm-12', 'col-xl-12', 'mb-5', 'pe-xl-5', 'pe-md-4', 'px-sm-3'];
  toolsContent.classList.add(...arrClass);
  toolsContent.innerHTML = ` <div > <h1>Tools page</h1></div> `;
  return toolsContent;
}

export default toolsPage;
