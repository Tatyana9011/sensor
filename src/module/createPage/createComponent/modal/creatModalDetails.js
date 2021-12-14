/* eslint-disable strict */
'use strict';

import { getDataStorage } from "../../../localStorage.js";
import state from "../../../include/state.js";

function creatModalDetails(target) {
  const body = document.querySelector('body');
  body.style.paddingRight = '0px';

  const data = state.usersData;
  const row = target.closest('tr');

  const getUsers = userId => data.users.filter(item => item.id === +userId);
  let phone, email, login, nameUser, avatar, name = "";

  if (row) {
    const rowUserId = row.children[0].dataset.id;
    const user = getUsers(rowUserId);
    name = user[0].name;
    phone = user[0].phone;
    email = user[0].email;
    login = user[0].login;
    avatar = user[0].avatarUrl

    if (name) {
      nameUser = name;
    } else {
      nameUser = login;
    }
  } else {
    const userId = getDataStorage('name').userId;
    const newData = getUsers(userId);
    login = newData[0].login;
    nameUser = newData[0].login;
    phone = newData[0].phone;
    email = newData[0].email;
    avatar = newData[0].avatarUrl;
  }

  const div = document.createElement('div');
  div.classList.add('modal-content');
  div.innerHTML = `
      <div class="modal-header">
           <div class="mt-2 position-relative">
              <div class="file">
                  <input name="image" type="file" class="form-control file__input"
                  accept='.jpg, .png, .gif' id="formImage">
                  <label class="file__button  file__preview" id="formPreview"
                  for='formImage'>${avatar ? `
                  <div class="file__preview"> </div>` : `
                  <img alt='UserPhoto' class='img-avatar unnamed' src='./img/unnamed.jpg' />`}</label>
              </div>
          </div>
        <h5 class="modal-title" id="exampleModalLabel">Details ${nameUser}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body d-flex ">
        <form class='form-add-photo' name='photo'>
          <div class="massager mb-2"></div>
          <div class = "details-input">
              <div class="details-users">
                    <span class="details-users-title">Login</span>
                    <input type="text" class="details-users-value" name="Login" placeholder="${login}" disabled>
              </div>
              ${(name !== 'undefined' && name !== "") ? `<div class="details-users">
                    <span class="details-users-title">Name</span>
                    <input type="text" class="details-users-value" name="Name" placeholder="${name}" disabled>
              </div>` : ''}

              ${(phone !== 'undefined' && phone !== "") ? `<div class="details-users">
                    <span class="details-users-title">Phone</span>
                    <input type="text" class="details-users-value" name="Phone" placeholder="${phone}" disabled>
              </div>` : ''}
              ${(email !== 'undefined' && email !== "") ? `<div class="details-users">
                    <span class="details-users-title">Email</span>
                    <input type="text" class="details-users-value" name="Email" placeholder="${email}" disabled>
              </div>` : ''}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id='edit'>Edit</button>
            <button type="submit" class="btn btn-outline-primary" id='saveChanges'>Save</button>
          </div>
        </form>
      </div>
      
      `;
  return div;
}

export default creatModalDetails;

