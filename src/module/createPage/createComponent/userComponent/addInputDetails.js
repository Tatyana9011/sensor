/* eslint-disable strict */
'use strict';

function addInputDetails(input) {
  const div = document.createElement('div');
  div.classList.add("details-users");
  div.innerHTML = `
                <span class="details-users-title">${input}</span>
                <input type="text" class="details-users-value"
                name="${input}" placeholder="${input}">
`;
  return div;
}

export default addInputDetails;

