import { appState, ActionTypes, SKIP_BUTTON } from '../types';

const initialState: appState = {
  appState: 'mainApp',
};
export default (state = initialState, action: ActionTypes): appState => {
  switch (action.type) {
    case SKIP_BUTTON:
      return { appState: action.payload };

    default:
      return state;
  }
};
