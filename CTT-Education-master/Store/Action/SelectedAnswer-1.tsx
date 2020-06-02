import {
  ActionTypes,
  SKIP_BUTTON,
  CATEGORY_TITLE,
  QUIZ_DATA_1,
  SELECTED_ANSWER_1,
} from '../types';

export const selectedAnswer = (value: object): ActionTypes => ({
  type: SELECTED_ANSWER_1,
  payload: value,
});
