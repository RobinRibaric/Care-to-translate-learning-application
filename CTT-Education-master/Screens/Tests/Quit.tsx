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
import MainButton from '../../Components/MainButton';
import { useDispatch } from 'react-redux';
import { skipButton } from '../../Store/Action/appState';

interface Props {}

const Quit = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Do you want to quit?</Text>
      </View>
      <View>
        <Text style={styles.title}>All your progress will be saved</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => dispatch(skipButton('mainApp'))}>
          <MainButton title={'Yes'} ButtonState={'selected'}></MainButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <MainButton title={'No'} ButtonState={'start'}></MainButton>
        </TouchableOpacity>
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
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontFamily: 'Lato-Bold',
    color: Colors.primary,
    marginBottom: 50,
  },
  buttonsContainer: {
    width: '70%',
    height: 150,
    justifyContent: 'space-between',
    marginTop: 50,
  },
  button: {
    width: '70%',
    height: 66,
    marginBottom: 10,
  },
  title: {
    marginTop: 25,
    marginBottom: 115,
    fontFamily: 'Lato-Regular',
    fontSize: 17,
  },
});

export default Quit;
