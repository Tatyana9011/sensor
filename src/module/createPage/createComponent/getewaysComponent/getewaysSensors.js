/* eslint-disable strict */
'use strict';

function getewaysSensors() {
  const wrapper = document.createElement('div');
  const arrClass = ['geteways-td'];
  wrapper.classList.add(...arrClass);
  wrapper.innerHTML = `
                  <div class="card" style="width: 70%;">
                    <div class="card-body">
                      <h5 class="card-title">Sensors</h5>
                      <p class="card-text">Some quick example text to build on the card
                      title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
  `;
  return wrapper;

}

export default getewaysSensors;
