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
import { skipButton } from '../../Store/Action/Language';
import { MaterialIcons } from '@expo/vector-icons';
import { getWordPickerQuizQuestions } from '../../quizHelper/quizHeleper2';
import Lesson from '../../quizHelper/Lesson';

interface Props {
  navigation: any;
}

// const quizDataFs = require();

const TestScreenOne: React.FC<Props> = ({ navigation }) => {
  const [answerCardStatus1, setAnswerCardStatus1] = useState('start');
  const [answerCardStatus2, setAnswerCardStatus2] = useState('start');
  const [answerCardStatus3, setAnswerCardStatus3] = useState('start');
  const [ButtonState, setButtonState] = useState('start');
  const [data, setData] = useState(null);
  const [answer, setAnswer] = useState(null);

  const currentCategoryName = useSelector(
    (state: RootState) => state.ActiveCategoryReducer.selectedCategory
  );

  const LanguageToLearn = useSelector(
    (state: RootState) => state.LanguageReducer.selectedLanguage
  );

  const LanguageToLearnCategories = useSelector(
    (state: RootState) => state.DataReducer.Categories[LanguageToLearn]
  );

  const LanguageToLearnPhrases = useSelector(
    (state: RootState) => state.DataReducer.Phrases[LanguageToLearn]
  );

  const lessonState = useSelector(
    (state: RootState) => state.LessonStateReducer.lessonState
  );

  const dispatch = useDispatch();
  let shuffledArray;

  const lesson = new Lesson(currentCategoryName);

  useEffect(() => {
    // const defaultCateogry = getCategory(categories_English, title);
    // const ids = getPhraseId(defaultCateogry, 5);
    // const phrases = getPhrases(phrases_Swedish, ids);
    // const data = wordPickerQuiz(phrases);
    // setQuizDataState(data);
    // console.log(quizDataState);
    // dispatch(quizData1(data));
    if (
      LanguageToLearnCategories !== undefined ||
      currentCategoryName !== undefined
    ) {
      setData(
        getWordPickerQuizQuestions(
          LanguageToLearnCategories,
          currentCategoryName,
          LanguageToLearnPhrases
        )
      );
    }

    setButtonState('start');
    setAnswerCardStatus1('start');
    setAnswerCardStatus2('start');
    setAnswerCardStatus3('start');
    // console.log(phrases_German);
  }, []);

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
      name: currentCategoryName,
      id: 13,
      selected: false,
      answerStatus: 'wrong',
      rightAnswer: 12,
    },
  ];
  return data === null ? (
    <Text>Loading...</Text>
  ) : (
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
          </View>
        </View>
        <Text style={styles.title}>Choose the correct translation</Text>
        <Text style={styles.question}>{data.phrase}</Text>
        <View style={styles.answerContainer}>
          <AnswerCard
            correctAnswer={'false'}
            status={answerCardStatus1}
            title={data.shuffledAnswers[0]}
            onPress={() => {
              setAnswerCardStatus1('selected');
              setButtonState('selected');
              setAnswer(data.shuffledAnswers[0]);
              // dispatch(selectedAnswer((testOneState[0].selected = true)));
            }}
          ></AnswerCard>
          <AnswerCard
            correctAnswer={'true'}
            status={answerCardStatus2}
            title={data.shuffledAnswers[1]}
            onPress={() => {
              setAnswerCardStatus2('selected');
              setButtonState('selected');
              setAnswer(data.shuffledAnswers[1]);
              // dispatch(selectedAnswer((testOneState[0].selected = true)));
            }}
          ></AnswerCard>
          <AnswerCard
            correctAnswer={'false'}
            status={answerCardStatus3}
            title={data.shuffledAnswers[2]}
            onPress={() => {
              setAnswerCardStatus3('selected');
              setButtonState('selected');
              setAnswer(data.shuffledAnswers[2]);
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
              console.log(lessonState);
              if (answer === data.correctAnswer) lesson.addScore();
              lesson.addPage();
              setButtonState('start');
              navigation.navigate('TestScreenTwo');
              /*  lessonState.forEach(lesson => {
                   if (lesson.name === currentCategoryName) {
                     console.log(lesson)
                   }
                 }) */
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
    fontSize: 25,
    fontFamily: 'Lato-Bold',
    color: '#000',
    textAlign: 'center',
    padding: 30,
  },
  button: {
    width: '70%',
    height: 66,
    marginBottom: 10,
  },
});

export default TestScreenOne;
