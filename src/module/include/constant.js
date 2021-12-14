/* eslint-disable strict */
'use strict';
//сколько передать юзеров
export const pageSize = 10;
//сколько висвечивать страниц
export const portionSize = 3;

export const inputDetails = ['Login', 'Name', 'Phone', 'Email'];


//вводные для таблици Users/Clients и Users/External
export const titleUsersToggleNavBar = ['Clients', 'Administrators', 'External'];
export const arrClassUsers = ['col-sm-12', 'col-xl-12', 'tableUsers'];
//шапка таблици
export const addTextHeadClients = ['#', `<input id='removeAll' type="checkbox"></input>`, 'Created', 'Login',
  'State', 'Name', 'email', 'phone', 'type'];
//шапка для таблици Users/Clients //когда 1 это true для добавления класс emphasize(подчеркивает текст)
export const arrClients = [0, 0, 1, 1, 1, 1, 0, 0, 0];
export const titleSearchClients = ['Login', 'UserStat']; // для search искать по какому признаку каких столбцах
//какие названия в базе данных для сортировки по дата атрибубу
export const dataAtrClients = ['', '', 'created', 'login', 'userState', 'name', '', '', ''];


//вводные для таблици Users/ADMIN
export const addTextHeadAdmin = ['#', `<input id='removeAll' type="checkbox"></input>`, 'AVA', 'Login',
  'Name', 'Created', 'Updated', 'Phone'];
export const arrAdmin = [0, 0, 0, 1, 1, 1, 1, 0];
export const titleSearchAdmin = ['Login', 'Created', 'Updated'];
export const dataAtrAdmin = ['', '', '', 'login', 'name', 'created', 'updated', ""];


//вводные для таблици Timezones
export const addTextHeadTimezones = ['#', `<input id='removeAll' type="checkbox"></input>`,
  'Name', 'Offset GMT', 'Offset Ms', 'Visibility'];
export const arrTimezones = [0, 0, 1, 1, 0, 0];
export const classAddTimezones = ['col-sm-12', 'col-xl-12'];
export const titleSearchTimezones = ['Name', 'Offset GMT'];
export const dataAtrTimezones = ['', '', 'description', 'name', '', ''];

//вводные для таблици Geteways
export const addTextHeadGeteways = ['#', `<input id='removeAll' type="checkbox"></input>`,
  'Created', 'Updated', 'serialNumber', 'Status'];
export const classAddGeteways = ['col-sm-12', 'col-xl-12', 'p-1'];
export const arrGeteways = [0, 0, 1, 1, 1, 0];
export const titleSearchGeteways = ['Created', 'Updated', 'serialNumber'];
export const dataAtrGeteways = ['', '', 'created', 'updated', 'serialNumber', ''];

