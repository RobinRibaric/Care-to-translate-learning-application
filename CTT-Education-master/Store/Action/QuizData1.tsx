import {
  ActionTypes,
  SKIP_BUTTON,
  CATEGORY_TITLE,
  QUIZ_DATA_1,
} from '../types';

export const quizData1 = (value): ActionTypes => ({
  type: QUIZ_DATA_1,
  payload: value,
});
