/* eslint-disable strict */
'use strict';

function creatModalAddUsers() {
  const div = document.createElement('div');
  div.classList.add('modal-content');
  div.innerHTML = `
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Created sensor</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex ">
        <form class='form-add-row' name='row'>
          <div class="massager mb-2"></div>
          <div class="w-100 mt-2">
            <label for="formGroupExampleInput1" class="form-label">E-mail*</label>
            <input name="email" type="email" class="form-control required"
              id="formGroupExampleInput1" placeholder="name@example.com">
          </div>
          <div class=" w-100 mt-2">
            <label for="formGroupExampleInput2" class="form-label">Login*</label>
            <input name="login" type="text" class="form-control required"
              id="formGroupExampleInput2" placeholder="Login">
          </div>
          <div class=" w-100 mt-2">
            <label for="formGroupExampleInput3" class="form-label">Name*</label>
            <input name="name" type="text" class="form-control required"
              id="formGroupExampleInput3" placeholder="Name">
          </div>
          <div class=" w-100 mt-2">
            <label for="inputPassword" class="form-label">Password*</label>
            <input name="psw" type="password" class="form-control required"
              id="inputPassword" placeholder="Password">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-secondary" id='saveChanges'>Save changes</button>
          </div>
        </form>
      </div>
      `;
  return div;
}

export default creatModalAddUsers;

