import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import OnboardingPageOne from '../Screens/Onboarding/OnboardingPageOne';
import OnboardingPageTwo from '../Screens/Onboarding/OnboardingPageTwo';
import OnboardingPageThree from '../Screens/Onboarding/OnboardingPageThree';
import OnboardingPageFour from '../Screens/Onboarding/OnboardingPageFour';

const OnBoardingScroll = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
        horizontal={true}
        pagingEnabled={true}
      >
        <OnboardingPageOne />
        <OnboardingPageTwo />
        <OnboardingPageThree />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  scroll: {
    flexDirection: 'row',
  },
});

export default OnBoardingScroll;
