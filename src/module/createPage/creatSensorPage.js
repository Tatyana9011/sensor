/* eslint-disable strict */
'use strict';

function creatSensorPage() {
  const div = document.createElement('div');
  const body = document.querySelector('body');
  body.style.background = '#e5e5e5';
  div.classList.add('sensor');
  div.innerHTML = `
      <div class="row wrapper-row">
        <div class=" col-lg-2 left-menu">
          <ul class="d-flex flex-column mt-md-4">
            <li class="link active">
              <a type="button" id="sensor-users" class="navigation-item active">Users</a>
            </li>
            <li class="link">
              <a type="button" id="sensor-geteways" class="navigation-item">Geteways</a>
            </li>
            <li class="link">
              <a type="button" id="sensor-gateway-models" class="navigation-item">Gateway models</a>
            </li>
            <li class="link">
              <a type="button" id="sensor-categories" class="navigation-item">Sensor categories</a>
            </li>
            <li class="link ">
              <a type="button" id="sensor-timezones" class="navigation-item">Timezones</a>
            </li>
            <li class="link">
              <a type="button" id="sensor-logging" class="navigation-item">Logging</a>
            </li>
            <li class="link">
              <a type="button" id="sensor-tools" class="navigation-item">Tools</a>
            </li>
          </ul>
        </div>
        <div class="col-md position-relative content-sensor">
          <div class="row align-items-center header-row">
            <div class="col-sm-8">
              <h2 id='title-page'>Users</h2>

            </div>
            <div class="position-absolute w-25 top-2 end-0">
              <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="navigation-item">
                <img alt='UserPhoto' class='img-avatar avatar'  src='./img/avatar.jpg' />
              </a>
              <a type="button" class="btn btn-outline-secondary navigation-item exit">
                <img class='img-exit' alt="exit" src="./img/logout.png"> Exit
              </a>
            </div>
          </div>
          <div class="row toggleNavBar "></div>
           <form id='updateUsers' name='updateUsers'>
              <div class="massager mb-2 overflow-hidden"></div>
            </form>
          <div class="row content"></div>
        </div>
      </div>
      <!-- Modal -->
      <div class="mob-menu-btn">
						<span></span>
						<span></span>
						<span></span>
			</div>
  `;
  return div;
}

export default creatSensorPage;
