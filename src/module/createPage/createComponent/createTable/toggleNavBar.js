/* eslint-disable strict */
'use strict';
import { titleUsersToggleNavBar } from "../../../include/constant.js";

function toggleNavBar() {
  console.log('toggleNavBar: ');
  const toggle = document.querySelector('.toggleNavBar');
  toggle.innerHTML = ``;

  toggle.innerHTML = `
    <div class="filters-wrapper">
                <ul class = "filter-tabs"> </ul>
                <div class="filter-slider" aria-hidden="true">
                  <div class="filter-slider-rect"></div>
                </div>
    </div>`;

  const ul = document.querySelector('.filter-tabs');
  ul.innerHTML = ``;

  titleUsersToggleNavBar.forEach((item, index) => {
    const li = document.createElement('li');
    if (index === 0) {
      li.innerHTML = `<button class="filter-button filter-active" data-translate-value ="${index}" >${item}</button>`;
    } else {
      li.innerHTML = `<button class="filter-button" data-translate-value ="${index * 100}%" >${item}</button>`;
    }
    ul.append(li);
  });

}

export default toggleNavBar;
