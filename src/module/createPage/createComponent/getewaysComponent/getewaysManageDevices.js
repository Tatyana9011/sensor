/* eslint-disable strict */
'use strict';

function getewaysManageDevices(data) {
  const table = document.querySelector('tbody');
  if (table) {
    table.innerHTML = '';

    if (data) {
      const ollTr = data.map((obj, index) => {
        const creatTr = document.createElement('tr');
        creatTr.innerHTML = `
                        <td class='col1' scope="row" data-id=${obj.id}>${index + 1}</td>
                        <td><input class='row-table col1' type="checkbox"></input></td>
                        <td class='col3'>${obj.created}</td>
                        <td class='col3'>${obj.updated}</td>
                        <td class='col2'>${obj.serialNumber}</td>
                        <td class='col2'>
                        ${obj.statusValue ? `
            <div class = "wrapper-toggle">
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

export default getewaysManageDevices;
