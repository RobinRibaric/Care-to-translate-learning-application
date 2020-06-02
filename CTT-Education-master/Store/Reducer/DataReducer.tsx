import { data } from '../types';
const categories_English = require('../../DB/categories_English.json');
const categories_Swedish = require('../../DB/categories_Swedish.json');
const categories_German = require('../../DB/categories_German.json');

const phrases_English = require('../../DB/phrases_English.json');
const phrases_Swedish = require('../../DB/phrases_Swedish.json');
const phrases_German = require('../../DB/phrases_German.json');

// import { appState, ActionTypes, SKIP_BUTTON } from '../types';

const initialState = {
  Categories: {
    English: categories_English,
    Swedish: categories_Swedish,
    German: categories_German,
  },
  Phrases: {
    English: phrases_English,
    Swedish: phrases_Swedish,
    German: phrases_German,
  },
};
export default (state = initialState, action): data => {
  switch (action.type) {
    default:
      return state;
  }
};
