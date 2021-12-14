/* eslint-disable strict */
'use strict';

import creatButtonPages from './creatButtonPages.js';
import updateData from '../../../api/apiUser/updateData.js';
import { pageSize, portionSize } from "../../../include/constant.js";

function paginator(data, currentPage = 1, portionNumber = 1, pageSizeUser = pageSize, portionSizeUser = portionSize) {
  console.log('paginator: ');
  const paginateButton = document.getElementById('paginate_button');
  const dataTablesPaginate = document.querySelector('.dataTables_paginate');
  const next = dataTablesPaginate.querySelector('.next');
  const previous = dataTablesPaginate.querySelector('.previous');
  let totalItemsCount = 0;
  let pages = '';
  paginateButton.innerHTML = '';

  if (data) {
    totalItemsCount = data.totalCount;
  }

  //номер порции
  //let portionNumber = 1;
  //сколько всего страниц
  const pageCount = Math.ceil(totalItemsCount / pageSizeUser);

  if (!document.querySelector('.page')) {
    pages = creatButtonPages(portionNumber, +currentPage, portionSizeUser, pageCount);
  }
  //количество страниц всего на сервере делим на порцию страниц которую необходимо прислать
  //(алучаем количество порция на сервере)
  const portionCount = Math.ceil(pageCount / portionSizeUser);
  //нажимаем на кнопку назад (в кнопки прибавляют в сторону уменьшения )
  if (portionNumber <= 1) {
    previous.classList.add('visually-hidden');
  }
  if (portionNumber >= portionCount) {
    next.classList.add('visually-hidden');
  }
  /* if (portionNumber === 1 && pages.length > portionSizeUser) {
    next.classList.remove('visually-hidden');
    // next.removeAttribute('disabled');
  } */

  dataTablesPaginate.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.matches('.next') && !target.matches('.previous')) {
      return;
    }
    paginateButton.innerHTML = '';
    if (target.matches('.next')) {
      portionNumber++;
      previous.classList.remove('visually-hidden');
    }
    if (target.matches('.previous')) {
      portionNumber--;
      next.classList.remove('visually-hidden');
    }
    if (portionNumber <= 1) {
      previous.classList.add('visually-hidden');
    }
    if (portionNumber >= portionCount) {
      next.classList.add('visually-hidden');
    }

    pages = creatButtonPages(portionNumber, +currentPage, portionSize, pageCount);
    paginateButton.append(...pages);
  });

  paginateButton.append(...pages);

  paginateButton.addEventListener('click', event => {
    event.preventDefault();

    const button = paginateButton.querySelectorAll('button');
    const target = event.target;

    button.forEach(btn => btn.classList.remove('action'));

    if (target.matches('button')) {
      const title = document.getElementById('title-page');

      if (title.textContent === "Users") {
        const form = document.getElementById('updateUsers');
        currentPage = target.textContent;
        updateData(form, target.textContent, portionNumber);
      }
    }

  });

  return currentPage;
}

export default paginator;
