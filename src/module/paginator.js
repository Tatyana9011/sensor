/* eslint-disable strict */
'use strict';
import { getDataStorage } from './localStorage.js';
import creatButtonPages from './creatButtonPages.js';

function paginator(currentPage = 1, totalItemsCount = 0, pageSize = 10, portionSize = 5) {
  //pageSize сколько елементов на странице
  //totalItemsCount - сколько всего елементов на сервере
  //currentPage - текущая страница - при загрузке всегда первая
  //portionSize = 5 //сколько страниц должно прийти с сервера //порция страниц
  const paginateButton = document.getElementById('paginate_button');
  const dataTablesPaginate = document.querySelector('.dataTables_paginate');
  const next = dataTablesPaginate.querySelector('.next');
  const previous = dataTablesPaginate.querySelector('.previous');
  const data = getDataStorage('data');

  totalItemsCount = data.length;
  console.log('totalItemsCount: ', totalItemsCount);

  //номер порции
  let portionNumber = 1;
  //сколько всего страниц
  const pageCount = Math.ceil(totalItemsCount / pageSize);

  let pages = creatButtonPages(portionNumber, currentPage, portionSize, pageCount);
  //количество страниц всего на сервере делим на порцию страниц которую необходимо прислать
  //(алучаем количество порция на сервере)
  const portionCount = Math.ceil(pageCount / portionSize);
  //нажимаем на кнопку назад (в кнопки прибавляют в сторону уменьшения )
  if (portionNumber <= 1) {
    previous.setAttribute('disabled', 'true');
  }
  if (portionNumber >= portionCount) {
    next.setAttribute('disabled', 'true');
  }

  dataTablesPaginate.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.matches('.next') && !target.matches('.previous')) {
      return;
    }
    paginateButton.innerHTML = '';
    if (target.matches('.next')) {
      portionNumber++;
      previous.removeAttribute('disabled');
    }
    if (target.matches('.previous')) {
      portionNumber--;
      next.removeAttribute('disabled');
    }
    if (portionNumber <= 1) {
      previous.setAttribute('disabled', 'true');
    }
    if (portionNumber >= portionCount) {
      next.setAttribute('disabled', 'true');
    }

    pages = creatButtonPages(portionNumber, currentPage, portionSize, pageCount);
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
      pages = creatButtonPages(portionNumber, currentPage, portionSize, pageCount);
      paginateButton.innerHTML = '';
      paginateButton.append(...pages);
    }

  });

  return currentPage;
}

export default paginator;
