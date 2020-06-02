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
import Bubble from '../../assets/images/Bubble.svg';
import { skipButton } from '../../Store/Action/appState';
import { useDispatch } from 'react-redux';

const OnboardingPageTwo = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Bubble></Bubble>
      <View style={styles.textConatiner}>
        <Text style={styles.header}>Learn</Text>
        <Text style={styles.text}>
          Learn and practice useful medically correct phrases and vocabulary in
          over 22 different languages.
        </Text>
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
    fontSize: 50,
    paddingBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Lato-Light',
    fontSize: 18,
  },
  images: {
    height: '100%',
    width: '100%',
  },
  logo: {
    width: '70%',
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
    borderRadius: 50,
    backgroundColor: '#c4c4c4',
    width: 13,
    height: 13,
  },
  dot2: {
    borderRadius: 50,
    backgroundColor: '#9AD4C6',

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

export default OnboardingPageTwo;
