/* eslint-disable strict */
'use strict';


const handleActiveTab = (tabs, target, className) => {
  console.log('handleActiveTab: ');
  tabs.forEach(tab => {
    tab.classList.remove(className);
  });

  if (!target.classList.contains(className)) {
    target.classList.add(className);
  }
};


export default handleActiveTab;

