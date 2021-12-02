/* eslint-disable strict */
'use strict';

function toggleNavBar(title) {
  console.log('toggleNavBar: ');
  const toggleNavBar = document.querySelector('.toggleNavBar');
  toggleNavBar.innerHTML = ``;

  toggleNavBar.innerHTML = `
    <div class="filters-wrapper">
                <ul class = "filter-tabs"> </ul>
                <div class="filter-slider" aria-hidden="true">
                  <div class="filter-slider-rect"></div>
                </div>
    </div>`;

  const ul = document.querySelector('.filter-tabs');
  ul.innerHTML = ``;

  title.forEach((item, index) => {
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
