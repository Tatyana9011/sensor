/* eslint-disable strict */
'use strict';

function getewaysManageDevices(data) {
  console.log('getewaysManageDevices', data);

  const table = document.querySelector('tbody');
  if (table) {
    table.innerHTML = '';

    if (data) {
      const ollTr = data.map((obj, index) => {
        const creatTr = document.createElement('tr');
        creatTr.innerHTML = `
                        <td class='col1' scope="row" data-id=${obj.id}>${index + 1}</td>
                        <td><input class='row-table col1' type="checkbox"></input></td>
                        <td class='col2'>${obj.created}</td>
                        <td class='col3'>${obj.updated}</td>
                        <td class='col3'>${obj.serialNumber}</td>
                        <td class='col2'>
                        ${obj.statusValue ? `<button type="button" class="btn btn-primary">Hide</button>` :
            `<button type="button" class="btn btn-primary">Show</button>`}
                        </td>
                        `;
        return creatTr;
      });
      table.append(...ollTr);
    }

  }

}

export default getewaysManageDevices;
