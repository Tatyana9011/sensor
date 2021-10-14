/* eslint-disable strict */
'use strict';

function sortUserData(title, data, active) {
  console.log('title: ', title);
  console.log('sortUserData: ');
  if (active) {
    return data.sort((a, b) => b[title].localeCompare(a[title]));
  }
  return data.sort((a, b) => a[title].localeCompare(b[title]));

}

export default sortUserData;
