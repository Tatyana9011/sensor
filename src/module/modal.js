/* eslint-disable strict */
'use strict';

function modal() {
  const body = document.querySelector('body');
  body.style.paddingRight = '0px';

  const div = document.createElement('div');
  const classAdd = ['modal', 'fade'];
  div.setAttribute('id', "exampleModal");
  div.setAttribute('tabindex', "-1");
  div.setAttribute('aria-labelledby', "exampleModalLabel");
  div.setAttribute('aria-hidden', "true");
  div.classList.add(...classAdd);
  div.innerHTML = `
        <div class="modal-dialog"> </div>
      `;
  return div;
}

export default modal;

