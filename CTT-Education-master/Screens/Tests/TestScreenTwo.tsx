import React, { ReactElement, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import AnswerCard from '../../Components/Test/AnswerCard';
import { RootState } from '../../Store';
import ButtonTest from '../../Components/Test/ButtonTest';
import { getQA } from '../../quizHelper/Helpers';
import { skipButton } from '../../Store/Action/Language';
import { MaterialIcons } from '@expo/vector-icons';
import MainButton from '../../Components/MainButton';
import {
  getCategory,
  getPhraseId,
  getPhrases,
  wordPickerQuiz,
} from '../../quizHelper/quizHeleper2';
import { AsyncStorage } from 'react-native';
import { quizData1 } from '../../Store/Action/QuizData1';
import quizDataFs from '../../DB/QuizData.json';

interface Props {
  navigation: any;
}

// const quizDataFs = require();

const categories_English = require('../../DB/categories_English.json');
const categories_Swedish = require('../../DB/categories_Swedish.json');
const categories_German = require('../../DB/categories_German.json');

const phrases_English = require('../../DB/phrases_English.json');
const phrases_Swedish = require('../../DB/phrases_Swedish.json');
const phrases_German = require('../../DB/phrases_German.json');

const TestScreenOne: React.FC<Props> = ({ navigation }) => {
  const [quizDataState, setQuizDataState] = useState([]);
  const [answerCardStatus1, setAnswerCardStatus1] = useState('start');
  const [answerCardStatus2, setAnswerCardStatus2] = useState('start');
  const [answerCardStatus3, setAnswerCardStatus3] = useState('start');
  const [ButtonState, setButtonState] = useState('start');

  const title = useSelector(
    (state: RootState) => state.ActiveCategoryReducer.selectedCategory
  );
  // const quizData = useSelector(
  //   (state: RootState) => state.QuizData1Reducer.quizDatascreen1
  // );
  // console.log(quizData);

  const dispatch = useDispatch();
  // console.log(getQA(title));

  useEffect(() => {
    // const defaultCateogry = getCategory(categories_English, title);
    // const ids = getPhraseId(defaultCateogry, 5);
    // const phrases = getPhrases(phrases_Swedish, ids);
    // const data = wordPickerQuiz(phrases);
    // setQuizDataState(data);
    // console.log(quizDataState);
    // dispatch(quizData1(data));
    setButtonState('start');
    setAnswerCardStatus1('start');
    setAnswerCardStatus2('start');
    setAnswerCardStatus3('start');
    // console.log(phrases_German);
  }, []);
  // const rightAnswer = quizData[Math.floor(Math.random() * 5)];
  // console.log(rightAnswer);
  // const removeRightAnswerFromState = () => {
  //   const editedState = quizData.splice(rightAnswer, 1);
  // };
  const testOneState = [
    {
      id: 11,
      selected: false,
      answerStatus: 'wrong',
      rightAnswer: 12,
    },
    {
      id: 12,
      selected: false,
      answerStatus: 'right',
      rightAnswer: 12,
    },
    {
      name: title,
      id: 13,
      selected: false,
      answerStatus: 'wrong',
      rightAnswer: 12,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Quit')}>
              <MaterialIcons name='close' size={40} color='black' />
            </TouchableOpacity>
          </View>
          <View style={styles.progressBar}>
            <View style={styles.progressBarPercentage1}></View>
            <View style={styles.progressBarPercentage1}></View>
          </View>
        </View>
        <Text style={styles.title}>Choose the correct translation</Text>
        <Text style={styles.question}>{quizDataFs[1][1]?.phrase}</Text>
        <View style={styles.answerContainer}>
          <AnswerCard
            correctAnswer={'true'}
            status={answerCardStatus1}
            title={quizDataFs[1][1]?.pickedWord}
            onPress={() => {
              setAnswerCardStatus1('selected');
              setButtonState('selected');
              // dispatch(selectedAnswer((testOneState[0].selected = true)));
            }}
          ></AnswerCard>
          <AnswerCard
            correctAnswer={'false'}
            status={answerCardStatus2}
            title={quizDataFs[1][2]?.pickedWord}
            onPress={() => {
              setAnswerCardStatus2('selected');
              setButtonState('selected');
              // dispatch(selectedAnswer((testOneState[0].selected = true)));
            }}
          ></AnswerCard>
          <AnswerCard
            correctAnswer={'false'}
            status={answerCardStatus3}
            title={quizDataFs[1][3]?.pickedWord}
            onPress={() => {
              setAnswerCardStatus3('selected');
              setButtonState('selected');
              // dispatch(selectedAnswer((testOneState[0].selected = true)));
            }}
          ></AnswerCard>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (ButtonState === 'selected') {
              setAnswerCardStatus1('done');
              setAnswerCardStatus2('done');
              setAnswerCardStatus3('done');
              setButtonState('done');
            }
            if (ButtonState === 'done') {
              navigation.navigate('TestScreenThree');
            }
          }}
        >
          <ButtonTest ButtonState={ButtonState}></ButtonTest>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
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
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  progressBar: {
    width: 250,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // backgroundColor: Colors.secondary,
    borderWidth: 1,
    borderColor: Colors.secondary,
    marginLeft: 10,
  },
  progressBarPercentage1: {
    width: 50,
    height: 20,
    backgroundColor: Colors.secondary,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Lato-Light',
    color: '#000',
  },
  answerContainer: {
    width: 275,
    height: 240,
    justifyContent: 'space-between',
    marginVertical: 50,
  },
  question: {
    fontSize: 30,
    fontFamily: 'Lato-Bold',
    color: '#000',
    textAlign: 'center',
  },
  button: {
    width: '70%',
    height: 66,
    marginBottom: 10,
  },
});

export default TestScreenOne;
