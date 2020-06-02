import {
  ActionTypes,
  SKIP_BUTTON,
  CATEGORY_TITLE,
  ONBOARDING_COMPLETE,
} from '../types';

export const skipButton = (value: string): ActionTypes => ({
  type: SKIP_BUTTON,
  payload: value,
});

export const onboardingCompleteAction = (value: boolean): ActionTypes => ({
  type: ONBOARDING_COMPLETE,
  payload: value,
});
