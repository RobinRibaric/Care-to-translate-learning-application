import {
  CATEGORY_TITLE,
  categoryData,
  categoryDataTestSate,
  ActionTypes,
} from '../types';

const initialState: categoryDataTestSate = {
  selectedCategory: '',
  testStart: false,
};
export default (
  state = initialState,
  action: ActionTypes
): categoryDataTestSate => {
  switch (action.type) {
    case CATEGORY_TITLE:
      return { selectedCategory: action.payload, testStart: true };
    default:
      return state;
  }
};
