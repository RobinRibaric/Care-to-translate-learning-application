import { LanguageState, ActionTypes, SELECT_LANGUAGE } from '../types';

const initialState: LanguageState = {
  selectedLanguage: '',
};
export default (state = initialState, action: ActionTypes): LanguageState => {
  switch (action.type) {
    case SELECT_LANGUAGE:
      return { selectedLanguage: action.payload };
    default:
      return state;
  }
};
