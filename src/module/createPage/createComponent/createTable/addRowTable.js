/* eslint-disable strict */
'use strict';

function addRowTable(data, index) {
  console.log('addRowTable: ');
  if (data) {
    const creatTr = document.createElement('tr');
    creatTr.innerHTML = `
                     <td class='col1' scope="row" data-id=${data.id}>${index}</td>
                     <td><input class='row-table col1' type="checkbox"></input></td>
                     <td class='col2'>${data.description}</td>
                     <td class='col3'>${data.name}</td>
                     <td class='col3'>${data.offsetMs}</td>
                     <td class='col2'>
                     ${data.description ? `<button type="button" class="btn btn-primary">Hide</button>` :
        `<button type="button" class="btn btn-primary">Show</button>`}
                     </td>
                     `;
    return creatTr;

  }


}

export default addRowTable;
