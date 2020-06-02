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
  AsyncStorage,
} from 'react-native';
import Colors from '../../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { skipButton } from '../../Store/Action/appState';
import { activeCategory } from '../../Store/Action/Language';
import ButtonSecondary from '../../Components/ButtonSecondary';

const Settings = ({ navigation }) => {
  const dispatch = useDispatch();
  // const selectedLanguage = useSelector(
  //   (state: RootState) => state.LanguageReducer.selectedLanguage
  // );
  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Settings</Text>
        <ButtonSecondary
          onPress={() => navigation.navigate('SelectLanguageSetting')}
        >
          Change Language
        </ButtonSecondary>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Care to Translate</Text>
          <Text style={styles.listText}>Rate our app</Text>
          <Text style={styles.listText}>Give us feedback</Text>
          <Text style={styles.listText}>Contact us</Text>
          <Text style={styles.listText}>About us</Text>
          <Text style={styles.listText}>Thanks to</Text>
          <Text style={styles.listText}>Terms and Privacy Policy</Text>
        </View>
        <Button
          onPress={() => dispatch(skipButton('onboarding'))}
          title='Revisit the onboarding'
          accessibilityLabel='Start the app'
        />
        {/* <Button
          onPress={() => AsyncStorage.clear()}
          title='Remove Storage'
          accessibilityLabel='remove asynvStorage'
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  OuterContainer: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
  },
  innerContainer: {
    width: '80%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    paddingVertical: 30,
    fontFamily: 'Lato-Bold',
    fontSize: 45,
    color: 'white',
  },
  listTitle: {
    fontSize: 30,
    fontFamily: 'Lato-Bold',
    color: 'white',
    marginBottom: 20,
  },

  listText: {
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: 'white',
    marginBottom: 20,
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list: {
    // flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default Settings;
