/* eslint-disable strict */
'use strict';

import { lengthCorrection } from "../../timezonesPage.js";
import state from "../../../include/state.js";

function renderTableTimezones(newData) {
  console.log('renderTableTimezones: ');

  const table = document.querySelector('tbody');
  if (table) {
    table.innerHTML = '';

    const data = newData ? newData : state.timezonesData;
    /* ${obj.description ? `<button type="button" class="btn btn-primary">Hide</button>` :
                `<button type="button" class="btn btn-primary">Show</button>`}
                          </td> */
    if (data) {
      const ollTr = data.map((obj, index) => {
        lengthCorrection(obj);
        const creatTr = document.createElement('tr');
        creatTr.innerHTML = `
                      <td class='col1' scope="row" data-id=${obj.id}>${index + 1}</td>
                      <td><input class='row-table col1' type="checkbox"></input></td>
                      <td class='col3'>${obj.description}</td>
                      <td class='col2'>${obj.name}</td>
                      <td class='col2'>${obj.offsetMs}</td>
                      <td class='col3'>
                       ${obj.description ? `
                       <div class = "wrapper-toggle" >
                       <label class="toggle" style='z-index: ${data.length - index}'>
                      <input type="checkbox" checked>
                      <span></span>
                      </label></div>` : `
            <div class = "wrapper-toggle"><label class="toggle" style='z-index: ${data.length - index}'>
                      <input type="checkbox">
                      <span></span>
                      </label></div>`}`;
        return creatTr;
      });
      table.append(...ollTr);
    }

  }
}

export default renderTableTimezones;
