/* eslint-disable strict */
'use strict';
import { getDataStorage } from './localStorage.js';
import creatButtonPages from './creatButtonPages.js';

function paginator(currentPage = 1, totalItemsCount = 0, pageSize = 10) {
  //currentPage текущяя страница (со старта она всегда бедет 1)
  //totalItemsCount  - сколько всего записей на сервере
  //pageSize - сколько записей на 1 странице мы хотим видить
  const paginateButton = document.getElementById('paginate_button');
  const dataTablesPaginate = document.querySelector('.dataTables_paginate');
  const next = dataTablesPaginate.querySelector('.next');
  const previous = dataTablesPaginate.querySelector('.previous');
  const data = getDataStorage('name');

  totalItemsCount = data.length;
  console.log('totalItemsCount: ', totalItemsCount);

  //сколько страниц должно прийти с сервера //порция страниц
  const portionSize = 3;
  //номер порции
  let portionNumber = 1;

  //сколько всего страниц
  const pageCount = Math.ceil(totalItemsCount / pageSize);
  console.log('pageCount: ', pageCount);

  let pages = creatButtonPages(pageCount, currentPage);

  //количество страниц всего на сервере делим на порцию страниц которую необходимо прислать 
  //(алучаем количество порция на сервере)
  const portionCount = Math.ceil(pageCount / portionSize);
  console.log('portionCount: ', portionCount);
  //нажимаем на кнопку назад (в кнопки прибавляют в сторону уменьшения )
  const leftPortionCount = (portionNumber - 1) * portionSize + 1;
  console.log('leftPortionCount: ', leftPortionCount);

  const rightPortionCount = portionNumber * portionSize;
  console.log('rightPortionCount: ', rightPortionCount);





  dataTablesPaginate.addEventListener('click', event => {
    event.preventDefault();
    paginateButton.innerHTML = '';
    const target = event.target;

    if (target.matches('.next')) {

      currentPage++;
      previous.removeAttribute('disabled');
    }
    if (target.matches('.previous')) {

      currentPage--;
      next.removeAttribute('disabled');
    }
    if (currentPage <= 1) {
      previous.setAttribute('disabled', 'true');
    }
    if (currentPage >= pages.length) {
      next.setAttribute('disabled', 'true');
    }
    pages = creatButtonPages(pageCount, currentPage);
    paginateButton.append(...pages);

  });

  paginateButton.append(...pages);

  paginateButton.addEventListener('click', event => {
    event.preventDefault();
    const button = paginateButton.querySelectorAll('button');
    const target = event.target;
    button.forEach(btn => btn.classList.remove('action'));
    if (target.matches('button')) {
      currentPage = +target.textContent;
      pages = creatButtonPages(pageCount, currentPage);
      paginateButton.append(...pages);
    }
  });

  return currentPage;

}

export default paginator;
