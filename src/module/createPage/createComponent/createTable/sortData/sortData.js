/* eslint-disable strict */
'use strict';

function sortUserData(title, data, active) {
  if (active) {
    data.users.sort((a, b) => b[title].localeCompare(a[title]));
    return data;
  }
  data.users.sort((a, b) => a[title].localeCompare(b[title]));
  return data;

}

export default sortUserData;
