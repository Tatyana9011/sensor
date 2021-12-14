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

  const stratusMassage = `<div class="preloader">${status}</div> `;

  document.head.append(style);
  if (!div) {
    const login = document.querySelector('.login');

    if (login) {
      const elem = login.querySelector('.massager');
      elem.innerHTML = ``;
      elem.innerHTML = stratusMassage;
    }

  } else {
    div.innerHTML = ``;
    div.innerHTML = stratusMassage;

  }

  loaderHtml = document.querySelectorAll('.preloader');

  setTimeout(() => {

    if (loaderHtml) {
      loaderHtml.forEach(item => item.innerHTML = '');
      document.head.querySelector('style').remove();
    }

  }, time);

};

export default addStatus;
