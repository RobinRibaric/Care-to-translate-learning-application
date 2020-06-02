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
import { useDispatch, useSelector } from 'react-redux';
import { skipButton } from '../../Store/Action/appState';
import { activeCategory } from '../../Store/Action/Language';
import CorrectAnswer from './CorrectAnswers';

interface Props {
  title: string;
  onPress: () => void;
}
//by default it's gonna be 'start' when queiz is done then 'done'

const Card: React.FC<Props> = ({ title, onPress }) => {
  const cardState = 'start';
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          cardState === 'done' ? styles.doneContainer : styles.container,
        ]}
      >
        <View>
          <Text
            style={[
              styles.title,
              cardState === 'done' ? styles.doneTitle : styles.title,
            ]}
          >
            {title}
          </Text>
        </View>
        {/* <View style={styles.CorrectAnswer}>
          <Text>
            Correct Answers:<Text>{correctanswers}</Text>
          </Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 340,
    height: 115,
    marginVertical: '5%',
    borderRadius: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  doneContainer: {
    backgroundColor: Colors.primary,
  },

  title: {
    fontSize: 24,
    color: Colors.primary,
  },
  doneTitle: {
    color: '#fff',
  },
});

export default Card;
