import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AsyncStorage } from 'react-native';
import LanguageReducer from './Reducer/LanguageReducer';
import AppReducer from './Reducer/AppStateReducer';
import DataReducer from './Reducer/DataReducer';
import sentenceTestReducer from './Reducer/sentenceTestReducer';
import { persistStore, persistReducer } from 'redux-persist';
import ActiveCategoryReducer from './Reducer/ActiveCategoryReducer';
import LessonStateReducer from './Reducer/LessonStateReducer';
import QuizData1Reducer from './Reducer/QuizData-1-Reducer';
import OnboardingCompleteReducer from './Reducer/OnboardingCompleteReducer';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
  DataReducer,
  LanguageReducer,
  AppReducer,
  sentenceTestReducer,
  ActiveCategoryReducer,
  LessonStateReducer,
  QuizData1Reducer,
  OnboardingCompleteReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['AppReducer'],
};
const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
