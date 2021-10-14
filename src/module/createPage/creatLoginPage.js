/* eslint-disable strict */
'use strict';

function creatLoginPage() {
  const div = document.createElement('div');
  const arrClassList = ['container', 'w-25', 'login', 'd-flex', 'flex-column'];
  div.classList.add(...arrClassList);
  div.innerHTML = `
      <div class="w-100 position-relative ">
        <div class="massager  w-100 position-absolute"> </div>
      </div>
      <form name='authorization' class='mt-5 w-100'>
        <div class="form-floating mb-3 ">
          <input name="Login" type="text" class="form-control required" id="floatingInput" placeholder="Login">
          <label for="floatingInput">Login</label>
        </div>
        <div class="form-floating mb-3">
          <input name="Password" type="password" class="form-control required"
          id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating mb-3">
          <input name="URL" type="text" class="form-control required" id="floatingInputName" placeholder="Server URL">
          <label for="floatingInputName">Server URL</label>
        </div>
        <button type="submit" id="login" class="btn btn-secondary mt-3 mb-3" disabled='true'>Log in</button>
      </form>
  `;
  return div;
}

export default creatLoginPage;
