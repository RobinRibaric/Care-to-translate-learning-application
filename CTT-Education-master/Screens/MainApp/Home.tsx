import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

import Colors from '../../constants/Colors';
import Card from '../../Components/Test/Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { sentenceTest } from '../../Store/Action/appState';
import { skipButton } from '../../Store/Action/appState';
import { activeCategory } from '../../Store/Action/Language';
// import Swedish from '../../DB/categories_Swedish.json';
import AnswerCard from '../../Components/Test/AnswerCard';
import ButtonTest from '../../Components/Test/ButtonTest';
import CorrectAnswer from '../../Components/Test/CorrectAnswers';
import LessonProgress from '../../Components/Test/LessonsProgress';
import lessonState from '../../Store/Action/lessonStates';
import Lesson from '../../quizHelper/Lesson';

const Home = () => {
  const dispatch = useDispatch();
  // console.log(await require(`../../DB/categories_${Lang}.json`));
  const selectedLanguage = useSelector(
    (state: RootState) => state.LanguageReducer.selectedLanguage
  );
  const defaultLanguage = useSelector(
    (state: RootState) => state.DataReducer.Categories['English']
  );

  const onboardingComplete = useSelector(
    (state: RootState) => state.OnboardingCompleteReducer.onboardingComplete
  );

  let categoryData;

  const lang = { lang: 'mainApp' };

  if (onboardingComplete === false) {
    dispatch(skipButton('onboarding'));
  }
  return (
    <View style={styles.OuterContainer}>
      <Text style={styles.languageTitle}>{selectedLanguage}</Text>
      <View style={styles.innerTopContainer}>
        <View style={styles.pieChart}>
          <LessonProgress></LessonProgress>
        </View>
        <View style={styles.correctAnswer}>
          <CorrectAnswer> </CorrectAnswer>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={styles.list}
          data={defaultLanguage}
          renderItem={({ item }) => (
            <Card
              title={item.name}
              onPress={() => {
                dispatch(skipButton('testScreen'));
                dispatch(activeCategory(item.name));
              }}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  OuterContainer: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.secondary,
  },
  languageTitle: {
    paddingVertical: 35,
    fontFamily: 'Lato-Bold',
    fontSize: 45,
    color: 'white',
  },

  innerTopContainer: {
    flexDirection: 'row',
  },
  correctAnswer: {
    width: '50%',
    height: 200,
  },
  pieChart: {
    width: '50%',
    height: 200,
  },
  pieChartText: {},

  listContainer: {
    flexGrow: 1,
    width: '100%',
  },
  list: {
    flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 18,
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default Home;
