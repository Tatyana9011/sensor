/* eslint-disable strict */
'use strict';

function creatSensorPage() {
  const div = document.createElement('div');
  div.classList.add('sensor');
  div.innerHTML = `
      <div class="row">
        <div class="col-lg-2 px-sm-3">
          <ul class="d-flex flex-column mt-md-4 ps-lg-3">
            <li class="navigation-item  mb-2 mt-2">
              <a type="button" id="sencor-params" class="navigation-item">Users</a>
            </li>
            <li class="navigation-item ">
              <a type="button" id="sensor-categories" class="navigation-item">Geteways</a>
            </li>
            <li class="navigation-item  mb-2 mt-2">
              <a type="button" id="sencor-params" class="navigation-item">Gateway models</a>
            </li>
            <li class="navigation-item ">
              <a type="button" id="sensor-categories" class="navigation-item">Sensor categories</a>
            </li>
            <li class="navigation-item  mb-2 mt-2">
              <a type="button" id="sencor-params" class="navigation-item">Timezones</a>
            </li>
            <li class="navigation-item ">
              <a type="button" id="sensor-categories" class="navigation-item">Logging</a>
            </li>
            <li class="navigation-item mb-2 mt-2">
              <a type="button" id="sensor-categories" class="navigation-item">Tools</a>
            </li>
          </ul>
        </div>
        <div class="col-md position-relative">
          <div class="row align-items-center ">
            <div class="col-sm-8">
              <h2>List Products</h2>
            </div>
            <div class="position-absolute w-25 top-2 end-0">
              <a type="button" class="navigation-item exit">
              <img class='img-exit' alt="exit" src="./img/logout.png"> Exit
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-xl-12 mb-5 pe-xl-5 pe-md-4 px-sm-3">
              <table id="product-table" class="table table table-condensed table-hover table-striped w-100">
                <thead >
                  <tr >
                    <th colspan="4" class="input-button-group ">
                      <button type="button" id="add-row" class="btn btn-outline-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Add
                      </button>
                      <button type="button" id="delete-button" class="btn btn-outline-primary"
                      data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                    </th>
                    <th colspan="2" >
                      <div class="input-group">
                        <button class="btn btn-outline-secondary
                        dropdown-toggle" type="button" data-bs-toggle="dropdown"
                          aria-expanded="false">Search:</button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Type</a></li>
                          <li><a class="dropdown-item" href="#">Created</a></li>
                          <li><a class="dropdown-item" href="#">Updated</a></li>
                          <li><a class="dropdown-item" href="#">Photo</a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                        <input type="text" class="form-control" aria-label="Text input with dropdown button">
                      </div>
                    </th>
                  </tr>
                  <tr class="thead-th">
                    <th scope="col" >#</th>
                    <th ><input id='removeAll' type="checkbox"></input></th>
                    <th >Login</th>
                    <th >Created</th>
                    <th >Updated</th>
                    <th >Photo</th>
                  </tr>
                </thead>
                <tbody >
                </tbody>
              </table>
                <div class="dataTables_paginate paging_simple d-flex">
                <button class="paginate_button previous disabled"
                 aria-controls="example" id="example_previous">Previous</button>

                 <div id="paginate_button"></div>

                <button class="paginate_button next" aria-controls="example" id="example_next">Next</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog"> </div>
      </div>
  `;
  return div;
}

export default creatSensorPage;
