/* eslint-disable strict */
'use strict';

function loggingPage() {
  const loggingContent = document.createElement('div');
  const arrClass = ['col-sm-12', 'col-xl-12', 'mb-5', 'pe-xl-5', 'pe-md-4', 'px-sm-3'];
  loggingContent.classList.add(...arrClass);
  loggingContent.innerHTML = ` <div > <h1>Logging page</h1></div> `;
  return loggingContent;
}

export default loggingPage;
