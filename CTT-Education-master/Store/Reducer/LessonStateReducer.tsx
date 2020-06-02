import { lessonState, ActionTypes, LESSON_STATE } from '../types';

const initialState: lessonState = {
  lessonState: 'Hello there lession state',
};
export default (state = initialState, action: ActionTypes): lessonState => {
  switch (action.type) {
    case LESSON_STATE:
      return { lessonState: action.payload };

    default:
      return state;
  }
};
