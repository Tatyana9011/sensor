/* eslint-disable strict */
'use strict';

const creatModalDeleteUsers = nameUser => {
  const body = document.querySelector('body');
  body.style.paddingRight = '0px';

  const div = document.createElement('div');
  div.classList.add('modal-content');
  div.innerHTML = `
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete users</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="w-100 mt-2">
        ${(nameUser > 1) ? `<h5 class="modal-title">You are sure, you want to delete ${nameUser} users?</h5>` :
      (nameUser) ? `<h5 class="modal-title">You are sure, you want to delete ${nameUser} user?</h5>` :
        `<h5 class="modal-title">Select a user to delete</h5>`}
        </div>
        <form class='delete' name='delete'>
        <div class="massager mb-2"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" id="delete">Delete</button>
          </div>
        </form>
      </div>
  `;
  return div;
};

export default creatModalDeleteUsers;

