/* eslint-disable strict */
'use strict';

function getewaysDoes() {
  const wrapper = document.createElement('div');
  const arrClass = ['geteways-td'];
  wrapper.classList.add(...arrClass);
  wrapper.innerHTML = `
                  <div class="card" style="width: 20rem;">
                    <img src="../../../img/avatar.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">Does</h5>
                      <p class="card-text">Some quick example text to build on the card
                      title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
  `;
  return wrapper;

}

export default getewaysDoes;
