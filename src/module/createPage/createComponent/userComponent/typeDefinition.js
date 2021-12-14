/* eslint-disable strict */
'use strict';

function typeDefinition(str) {
  switch (str) {
    case 'Clients':
      return 'CLIENT';
    case 'Administrators':
      return 'ADMIN';
    case 'External':
      return 'EXTSYSTEM';
    case 'CLIENT':
      return 'Clients';
    case 'EXTSYSTEM':
      return 'External';
    case 'ADMIN':
      return 'Administrators';
  }
}

export default typeDefinition;
