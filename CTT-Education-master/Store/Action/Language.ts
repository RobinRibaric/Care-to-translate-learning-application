import { ActionTypes, SELECT_LANGUAGE, SKIP_BUTTON, DATA, CATEGORY_TITLE } from '../types';

export const addLanguage = (language: string): ActionTypes => ({
  type: SELECT_LANGUAGE,
  payload: language,
});
export const skipButton = (value: string): ActionTypes => ({
  type: SKIP_BUTTON,
  payload: value,
});

export const activeCategory = (selectedCategory: string): ActionTypes => ({
  type: CATEGORY_TITLE,
  payload: selectedCategory,
});


