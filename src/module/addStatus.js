/* eslint-disable strict */
'use strict';

const addStatus = (form, status, time, color = 'red') => {
  let loaderHtml = '';
  let style = '';
  let div = '';

  div = form.querySelector(".massager");
  style = document.createElement('style');
  style.insertAdjacentHTML('afterbegin', `
    .preloader{
        width: 100%;
        text-align: center;
        color: ${color};
        margin: 5px 0;
        }`);

  const stratus = `<div class="preloader">${status}</div> `;

  document.head.append(style);
  if (!div) {
    const login = document.querySelector('.login');
    const elem = login.querySelector('.massager');
    elem.innerHTML = stratus;
  } else {
    div.innerHTML = stratus;
  }

  loaderHtml = document.querySelector('.preloader');

  setTimeout(() => {

    if (loaderHtml) {
      loaderHtml.remove();
      document.head.querySelector('style').remove();
    }

  }, time);

};

export default addStatus;
