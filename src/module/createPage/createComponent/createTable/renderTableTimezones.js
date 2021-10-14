/* eslint-disable strict */
'use strict';

import { getDataStorage } from "../../../localStorage.js";
import { lengthCorrection } from "../../timezonesPage.js";

function renderTableTimezones(newData) {
  console.log('renderTableTimezones: ');

  const table = document.querySelector('tbody');
  table.innerHTML = '';

  const data = newData ? newData : getDataStorage('timezones');

  if (data) {
    const ollTr = data.map((obj, index) => {
      lengthCorrection(obj);
      const creatTr = document.createElement('tr');
      creatTr.innerHTML = `
                     <td class='col1' scope="row" data-id=${obj.id}>${index + 1}</td>
                     <td><input class='row-table col1' type="checkbox"></input></td>
                     <td class='col3'>${obj.description}</td>
                     <td class='col2'>${obj.name}</td>
                     <td class='col3'>${obj.offsetMs}</td>
                     <td class='col2'>
                     ${obj.description ? `<button type="button" class="btn btn-primary">Hide</button>` :
          `<button type="button" class="btn btn-primary">Show</button>`}
                     </td>
                     `;
      return creatTr;
    });
    table.append(...ollTr);
  }
}

export default renderTableTimezones;
