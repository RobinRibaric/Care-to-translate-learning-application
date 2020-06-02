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
import { CardStyleInterpolators } from '@react-navigation/stack';

interface Props {
  title: string;
  status: string;
  onPress: () => void;
  correctAnswer: string;
}

const Card: React.FC<Props> = ({ title, onPress, status, correctAnswer }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        status === 'selected' ? styles.containerSelected : null,
        status === 'done' && correctAnswer === 'true'
          ? styles.containerCorrectAnswer
          : null,
        status === 'done' && correctAnswer === 'false'
          ? styles.containerWrongAnswer
          : null,
      ]}
    >
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 275,
    height: 65,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: Colors.secondary,
  },
  containerSelected: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 275,
    height: 65,
    borderWidth: 10,
    borderRadius: 15,
    borderColor: Colors.primary,
  },
  containerCorrectAnswer: {
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 275,
    height: 75,
    borderWidth: 10,
    borderRadius: 15,
    borderColor: Colors.primary,
  },
  containerWrongAnswer: {
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    width: 275,
    height: 65,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: Colors.secondary,
  },
  textContainer: {},
  title: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Lato-Light',
  },
});

export default Card;
