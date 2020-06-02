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
import { MaterialIcons } from '@expo/vector-icons';

const Settings = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.OuterContainer}>
      <View style={styles.close}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name='close' size={40} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.languageContainer}>
          <Text style={styles.listTitle}>I'm Learning</Text>
          <Text style={styles.listText}>Swedish</Text>
          <ButtonSecondary
            onPress={() => navigation.navigate('SelectLanguageSetting')}
          >
            Change Language
          </ButtonSecondary>
        </View>
        <View style={styles.languageContainer}>
          <Text style={styles.listTitle}>I'm Speaking</Text>
          <Text style={styles.listText}>English</Text>
          <ButtonSecondary
            onPress={() => navigation.navigate('SelectLanguageSetting')}
          >
            Change Language
          </ButtonSecondary>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  OuterContainer: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.secondary,
  },
  innerContainer: {
    width: '80%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    paddingVertical: 30,
    fontFamily: 'Lato-Bold',
    fontSize: 45,
    color: 'white',
  },
  listTitle: {
    fontSize: 35,
    fontFamily: 'Lato-Bold',
    color: 'white',
    marginBottom: 20,
  },

  listText: {
    fontSize: 30,
    fontFamily: 'Lato-Light',
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

  languageContainer: {
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
  close: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default Settings;
