/* eslint-disable strict */
'use strict';

export function saveDataJSON(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getDataStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function removeDataStorage(name) {
  localStorage.removeItem(name);
}
