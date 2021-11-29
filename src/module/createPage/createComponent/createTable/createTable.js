/* eslint-disable strict */
'use strict';

function createTable(addClass, pages = true) {
  console.log('createTable ');

  const div = document.createElement('div');
  div.classList.add(...addClass);
  div.innerHTML = `
  <table id="product-table" class="table table-condensed table-hover table-striped w-100">
                <thead>
                <tr>
                    <th colspan="4" class="input-button-group ">
                      <button type="button" id="add-row" class="btn btn-outline-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Add
                      </button>
                      <button type="button" id="delete-button" class="btn btn-outline-primary mx-lg-3"
                      data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                    </th>
                    <th colspan="2" >
                      <div class="input-group">
                        <button class="btn btn-outline-secondary
                        dropdown-toggle" type="button" data-bs-toggle="dropdown"
                          aria-expanded="false">Search:</button>
                        <ul class="dropdown-menu">
                        </ul>
                        <input type="text" class="form-control" aria-label="Text input with dropdown button">
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
              ${pages ? `<div class="dataTables_paginate paging_simple d-flex">
                <button class="paginate_button previous disabled"
                 aria-controls="example" id="example_previous">Previous</button>

                 <div id="paginate_button"></div>

                <button class="paginate_button next" aria-controls="example" id="example_next">Next</button>
                </div>` : ''}
  `;

  return div;

}

export default createTable;
