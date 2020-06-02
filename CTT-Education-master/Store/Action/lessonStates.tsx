import { ActionTypes, LESSON_STATE } from '../types';

export const lessonState = (value: any): ActionTypes => ({
  type: LESSON_STATE,
  payload: value,
});
