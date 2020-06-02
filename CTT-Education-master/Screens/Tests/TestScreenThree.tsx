import React, { ReactElement } from 'react';
import { fillTheBlank } from '../../quizHelper/Helpers';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import AnswerCard from '../../Components/Test/AnswerCard';
import { RootState } from '../../Store';

interface Props {
  navigation: any;
}

const TestScreenThree: React.FC<Props> = ({ navigation }) => {
  const title = useSelector(
    (state: RootState) => state.ActiveCategoryReducer.selectedCategory
  );
  const quiz = fillTheBlank(title);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the correct translation</Text>
      <Text style={styles.question}>{quiz[0]}</Text>
      <View style={styles.answerContainer}>
        <AnswerCard title={quiz[1]}></AnswerCard>
        <AnswerCard title={quiz[2]}></AnswerCard>
        <AnswerCard title={quiz[3]}></AnswerCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cc',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    // height: 115,
    // margin: '5%',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Lato-Light',
    color: '#000',
  },
  answerContainer: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  question: {
    fontSize: 26,
    fontFamily: 'Lato-Regular',
    color: '#000',
  },
});

export default TestScreenThree;
