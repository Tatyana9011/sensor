/* eslint-disable strict */
'use strict';


const handleActiveTab = (tabs, event, className) => {
  console.log('handleActiveTab: ');
  tabs.forEach(tab => {
    tab.classList.remove(className);
  });

  if (!event.target.classList.contains(className)) {
    console.log('event.target.classList.contains(className): ', event.target.classList.contains(className));
    event.target.classList.add(className);
  }
};


export default handleActiveTab;

