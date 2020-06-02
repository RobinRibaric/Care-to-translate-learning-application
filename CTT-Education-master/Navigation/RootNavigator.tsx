import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator, TestNavigation } from './AppNavigator';
import Onboarding from '../Navigation/OnBoardingScroll';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';
import OnboardingPageFour from '../Screens/Onboarding/OnboardingPageFour';
import Navigator from '../Screens/Tests/Navigator';

//Test screnn

import { createStackNavigator } from '@react-navigation/stack';

const RootNavigator = () => {
  // onboarding   --   selectLanguage   ---- start
  // const [appState, setAppState] = useState('onboarding');
  const appState = useSelector((state: RootState) => state.AppReducer.appState);
  const testStart = useSelector(
    (state: RootState) => state.sentenceTestReducer.testStart
  );

  return (
    <NavigationContainer>
      {appState === 'onboarding' && <Onboarding />}
      {appState === 'selectLanguage' && <OnboardingPageFour />}
      {appState === 'mainApp' && <BottomTabNavigator />}
      {appState === 'testScreen' && <TestNavigation />}
      {/* {appState === 'mainApp' && (
        <SentenceTest question='Jag förstår att du har ont' answer='I underetsnad ' />
      )} */}
    </NavigationContainer>
  );
};

export default RootNavigator;
