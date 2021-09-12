/* eslint-disable strict */
'use strict';

function highlightBtn() {
  const removeBtn = document.getElementById('removeAll');
  const rowTable = document.querySelectorAll('.row-table');

  removeBtn.addEventListener('click', event => {
    if (removeBtn.checked === true) {
      if (rowTable) {
        rowTable.forEach(tr => {
          const input = tr.closest('input');
          input.checked = true;
        });
      }
    } else {
      if (rowTable) {
        rowTable.forEach(tr => {
          const input = tr.closest('input');
          input.checked = false;
        });
      }
    }
  });
}

export default highlightBtn;