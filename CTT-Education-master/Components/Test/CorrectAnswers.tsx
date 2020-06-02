import React, { ReactElement } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/Colors';
import { useSelector } from 'react-redux';
import HeartLogo from '../../assets/images/heart.svg';

const CorrectAnswer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <HeartLogo width={132} height={116} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Correct answers</Text>
        <Text style={styles.numbers}>
          <Text>0</Text>/40
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#rgba(0,0,0,0)',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 340,
    height: 115,
    marginVertical: '5%',
    borderRadius: 9,
  },
  textContainer: {},
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
  numbers: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: '#fff',
  },
});

export default CorrectAnswer;
