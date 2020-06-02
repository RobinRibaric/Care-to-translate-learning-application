export interface LanguageState {
  selectedLanguage: string;
}
export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export interface SelectLanguageAction {
  type: typeof SELECT_LANGUAGE;
  payload: string;
}

//SKIP BUTTON
export interface appState {
  appState: any;
}
export const SKIP_BUTTON = 'SKIP_BUTTON';
export interface skipButtonAction {
  type: typeof SKIP_BUTTON;
  payload: any;
}

//ONBOARDING COMPLETE
export interface onboardingComplete {
  onboardingComplete: boolean;
}
export const ONBOARDING_COMPLETE = 'ONBOARDING_COMPLETE';
export interface onboardingCompleteAction {
  type: typeof ONBOARDING_COMPLETE;
  payload: boolean;
}

// DATA
export interface data {
  data: Object;
}
export const DATA = 'DATA';
export interface data {
  type: typeof DATA;
  payload: string;
}

//SENTENCE TEST SCREEN

export interface activeCategory {
  selectedCategory: string;
}
export const CATEGORY_TITLE = 'CATEGORY_TITLE';
export interface activeCategoryAction {
  type: typeof CATEGORY_TITLE;
  payload: string;
}

export const LESSON_STATE = 'LESSON_STATE';
export interface lessonState {
  lessonState: any;
}
export interface lessonStateAction {
  type: typeof LESSON_STATE;
  payload: any;
}

//quizdata 1
export const QUIZ_DATA_1 = 'QUIZ_DATA_1';
export interface quizdataOne {
  quizDatascreen1: any;
}
export interface quizdata1Action {
  type: typeof QUIZ_DATA_1;
  payload: any;
}

export type ActionTypes =
  | SelectLanguageAction
  | skipButtonAction
  | data
  | activeCategoryAction
  | lessonStateAction
  | quizdata1Action
  | onboardingCompleteAction;
