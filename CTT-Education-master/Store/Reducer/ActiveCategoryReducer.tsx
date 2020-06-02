import { LanguageState, ActionTypes, SELECT_LANGUAGE, activeCategory, CATEGORY_TITLE } from '../types';


const initialState: activeCategory = {
  selectedCategory: '',

}

export default (state = initialState, action: ActionTypes): activeCategory => {
  switch (action.type) {
    case CATEGORY_TITLE:
      return { selectedCategory: action.payload };
    default:
      return state;
  }
};

