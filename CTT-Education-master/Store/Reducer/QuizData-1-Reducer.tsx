import {
  lessonState,
  ActionTypes,
  LESSON_STATE,
  quizData1,
  quizdataOne,
  QUIZ_DATA_1,
  quizdata1Action,
} from '../types';

const initialState: quizdataOne = {
  quizDatascreen1: null,
};
export default (state = initialState, action: ActionTypes): quizdataOne => {
  switch (action.type) {
    case QUIZ_DATA_1:
      return { quizDatascreen1: action.payload };

    default:
      return state;
  }
};
