import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import WheelChair from '../../assets/images/Wheerchair-group.svg';
import { skipButton } from '../../Store/Action/appState';
import { useDispatch } from 'react-redux';

const OnboardingPageThree = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.greenbackground}>
        <WheelChair />
      </View>
      <View style={styles.textConatiner}>
        <Text style={styles.header}>Communicate</Text>
        <Text style={styles.text}>
          Improve your communication with patients and coworkers for a safe and
          more effecient work place.
        </Text>
      </View>
      <View style={styles.buttonGroupContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(skipButton('selectLanguage'))}
        >
          <Text style={styles.buttonText}>Let's Start</Text>
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
  textConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  header: {
    fontFamily: 'Lato-Light',
    fontSize: 45,
    paddingBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Lato-Light',
    fontSize: 18,
  },

  logo: {
    width: '70%',
  },

  button: {
    backgroundColor: '#C4C4C4',
    borderRadius: 7,
    marginBottom: '2%',
    // width: 90,
    // height: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    borderRadius: 50,
    width: 13,
    height: 13,
    backgroundColor: '#c4c4c4',
  },
  dot2: {
    borderRadius: 50,
    backgroundColor: '#c4c4c4',

    width: 13,
    height: 13,
  },
  dot3: {
    backgroundColor: '#9AD4C6',
    borderRadius: 50,
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

export default OnboardingPageThree;
