/* eslint-disable strict */
'use strict';

function creatButtonPages(portionNumber, currentPage, portionSize, pageCount) {
  const pages = [];

  const creatButton = i => {
    const button = document.createElement('button');
    const arrClassList = ['page'];
    if (i === currentPage) {
      arrClassList.push('action');
    }
    button.classList.add(...arrClassList);
    button.textContent = `${i}`;
    pages.push(button);
  };

  if (portionNumber * portionSize < pageCount) {
    for (let i = portionNumber * portionSize - portionSize + 1; i <= portionNumber * portionSize; i++) {
      creatButton(i);
    }
  } else {
    for (let i = portionNumber * portionSize - portionSize + 1; i <= pageCount; i++) {
      creatButton(i);
    }
  }

  return pages;
}

export default creatButtonPages;
