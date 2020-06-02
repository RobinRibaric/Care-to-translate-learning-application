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
import Doctor from '../../assets/images/doctor-shadow.svg';
import { useDispatch } from 'react-redux';
import { skipButton } from '../../Store/Action/appState';

interface Props {}

const Quit = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.header}>Well done!</Text>
        </View>
        <View>
          <Text style={styles.result}>Result</Text>
        </View>
        <View>
          <Text style={styles.answer}>
            <Text>4</Text>/4
          </Text>
        </View>
        <View>
          <Doctor width={105} height={265}></Doctor>
        </View>
        <TouchableOpacity
          style={styles.buttonsContainer}
          onPress={() => dispatch(skipButton('mainApp'))}
        >
          <MainButton title={'Done'} ButtonState={'selected'}></MainButton>
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
    fontSize: 45,
    fontFamily: 'Lato-Regular',
    color: Colors.primary,
    marginTop: 75,
  },
  buttonsContainer: {
    width: '70%',
    height: 66,
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 10,
  },
  button: {
    width: '70%',
    height: 66,
  },
  title: {
    marginTop: 25,
    marginBottom: 115,
    fontFamily: 'Lato-Regular',
    fontSize: 17,
  },
  result: {
    fontSize: 24,
    fontFamily: 'Lato-Regular',
    color: Colors.gray,
  },
  answer: {
    fontSize: 75,
    fontFamily: 'Lato-Bold',
    color: Colors.primary,
  },
});

export default Quit;
