import { selectedanswer_1, ActionTypes, SELECTED_ANSWER_1 } from '../types';

const initialState: selectedanswer_1 = {
  testOne: {},
};
export default (
  state = initialState,
  action: ActionTypes
): selectedanswer_1 => {
  switch (action.type) {
    case SELECTED_ANSWER_1:
      return {
        testOne: action.payload,
      };

    default:
      return state;
  }
};
