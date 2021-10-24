/* eslint-disable strict */
'use strict';

import { getDataStorage } from "../../../localStorage.js";

function creatModalDetails(target) {
  const body = document.querySelector('body');
  body.style.paddingRight = '0px';

  const row = target.closest('tr');
  let name = '';
  if (row) {
    name = row.children[3].textContent;
  } else {
    const userId = getDataStorage('name').userId;
    const data = getDataStorage('data');
    const newData = data.filter(item => item.id === userId);
    name = newData[0].login;
  }

  const div = document.createElement('div');
  div.classList.add('modal-content');
  div.innerHTML = `
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Details ${name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex ">
        <form class='form-add-photo' name='photo'>
          <div class="massager mb-2"></div>
          <div class="mt-2">
            <div class="file">
              <input name="image" type="file" class="form-control file__input"
              accept='.jpg, .png, .gif' id="formImage">
              <label class="file__button" for='formImage'>Upload</label>
              <div class="position-relative file__preview" id="formPreview"> </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-outline-primary" id='saveChanges'>Save photo</button>
          </div>
        </form>
      </div>
      `;
  return div;
}

export default creatModalDetails;

