/* eslint-disable strict */
'use strict';
import getewaysInfo from './getewaysInfo.js';
import getewaysEvents from './getewaysEvent.js';
import getewaysSensors from './getewaysSensors.js';
import getewaysDoes from './getewaysDoes.js';

function getewaysPageDetails() {

  const content = document.querySelector('.content');
  content.innerHTML = ``;
  const getewaysContent = document.createElement('div');
  getewaysContent.classList.add('row');
  getewaysContent.style.background = '#e5e5e5';
  getewaysContent.innerHTML = `
  <div class="col-sm-12 col-xl-12">
    <div style="background:#e5e5e5" class="col-sm-12 col-xl-12 geteways-table">
      <div class="col-sm-8 col-xl-8">
        <div class="geteways-row-info">
        </div>
        <div class="geteways-row-users">
        </div>
        
      </div>
      <div class="geteways-row-events col-sm-4 col-xl-4"></div>
    </div>
  </div>
  <div class="col-sm-12 col-xl-12">
    <div class="geteways-row-sensors "></div>
  </div>
  `;

  content.append(getewaysContent);
  const getewaysRowUsers = document.querySelector('.geteways-row-users');
  const getewaysRowInfo = document.querySelector('.geteways-row-info');
  const getewaysRowEvents = document.querySelector('.geteways-row-events');
  const getewaysRowSensors = document.querySelector('.geteways-row-sensors');

  getewaysRowInfo.append(getewaysInfo());
  getewaysRowInfo.append(getewaysInfo());
  getewaysRowEvents.append(getewaysEvents());
  getewaysRowSensors.append(getewaysSensors());
  getewaysRowUsers.append(getewaysDoes());

}

export default getewaysPageDetails;
