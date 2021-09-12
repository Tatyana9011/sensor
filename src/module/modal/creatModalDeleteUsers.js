/* eslint-disable strict */
'use strict';

const creatModalDeleteUsers = nameUser => {
  const div = document.createElement('div');
  div.classList.add('modal-content');
  div.innerHTML = `
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete sensor</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex ">
      <div class="w-100 mt-2">
        <h5 class="modal-title">You are sure you want to delete ${nameUser} users?</h5>
      </div>
      <form class='delete' name='delete'>
      
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-secondary" id='saveChanges'>OK</button>
        </div>
      </form>
      </div >
  `;
  return div;
};

export default creatModalDeleteUsers;

