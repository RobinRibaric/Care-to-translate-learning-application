import { onboardingComplete, ActionTypes, ONBOARDING_COMPLETE } from '../types';

const initialState: onboardingComplete = {
  onboardingComplete: false,
};

export default (
  state = initialState,
  action: ActionTypes
): onboardingComplete => {
  switch (action.type) {
    case ONBOARDING_COMPLETE:
      return { onboardingComplete: action.payload };

    default:
      return state;
  }
};
