import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import EduPhoto from '../../assets/images/Doctor-Hat.svg';
import Logo from '../../assets/images/LOGO/logo.svg';
import OnboardingPageFour from './OnboardingPageFour';
import { skipButton } from '../../Store/Action/Language';

const OnboardingPageOne: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.middleGroupContainer}>
        <Text style={styles.WelcomeText}>Welcome to</Text>
        <Logo width={280} height={105}></Logo>
        <EduPhoto width={104} height={274} />
        <Text style={styles.educationText}>Education</Text>
      </View>
      <View style={styles.buttonGroupContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(skipButton('selectLanguage'))}
        >
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.dotContiner}>
          <View style={styles.dot1}></View>
          <View style={styles.dot2}></View>
          <View style={styles.dot3}></View>
        </View>
      </View>
    </View>
  );
};

export default OnboardingPageOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    overflow: 'hidden',
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  middleGroupContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  WelcomeText: {
    fontFamily: 'Lato-Light',
    fontSize: 30,
    color: '#007C7C',
  },
  educationText: {
    fontFamily: 'Lato-Light',
    fontSize: 35,
    color: '#007C7C',
  },
  images: {
    height: '85%',
    width: '80%',
  },
  shadow: {
    // marginTop: '',
    zIndex: -1,
  },
  button: {
    backgroundColor: '#C4C4C4',
    borderRadius: 7,
    marginBottom: '2%',
    width: 90,
    height: 30,
    fontSize: 400,
  },
  buttonText: {
    paddingTop: '2%',
    textAlign: 'center',
    fontFamily: 'Lato-Light',
    fontSize: 18,
    color: '#fff',
  },
  greenbackground: {
    width: '100%',
    height: '55%',
  },
  buttonGroupContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot1: {
    backgroundColor: '#9AD4C6',
    borderRadius: 50,
    width: 13,
    height: 13,
  },
  dot2: {
    borderRadius: 50,
    backgroundColor: '#c4c4c4',

    width: 13,
    height: 13,
  },
  dot3: {
    borderRadius: 50,
    backgroundColor: '#c4c4c4',
    width: 13,
    height: 13,
  },
  dotContiner: {
    paddingTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 60,
  },
});
