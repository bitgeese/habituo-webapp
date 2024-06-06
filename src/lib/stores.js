import { writable } from 'svelte/store';

const getLocalStorageItem = (key, defaultValue) => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key) || defaultValue;
  }
  return defaultValue;
};

const setLocalStorageItem = (key, value) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, value);
  }
};

export const user = writable(null);
export const token = writable(getLocalStorageItem('token', null));

token.subscribe(value => {
  if (value) {
    setLocalStorageItem('token', value);
  } else {
    setLocalStorageItem('token', '');
  }
});
