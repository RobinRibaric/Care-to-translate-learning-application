import React, { useState } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addLanguage } from '../../Store/Action/Language';
import { RootState } from '../../Store';
import {
  skipButton,
  onboardingCompleteAction,
} from '../../Store/Action/appState';

const data = [{ value: 'English' }, { value: 'German' }, { value: 'Swedish' }];

const OnboardingPageFour: React.FC = () => {
  const dispatch = useDispatch();

  const [language, setLanguage] = useState<string>(data[0].value);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>I would like to learn:</Text>
      <Dropdown
        label='Select Language'
        data={data}
        itemColor={'#fff'}
        dropdownMargins={{ min: 2, max: 2 }}
        pickerStyle={styles.picker}
        containerStyle={{ width: '90%' }}
        value={language}
        onChangeText={(value, index, data) => {
          setLanguage(value);
        }}
      />
      <View>
        <Button
          onPress={() => {
            dispatch(addLanguage(language));
            dispatch(skipButton('mainApp'));
            dispatch(onboardingCompleteAction(true));
          }}
          title='Start'
          accessibilityLabel='Start the app'
        />
        {/* <Button
          onPress={() => dispatch(skipButton('onboarding'))}
          title='back'
          accessibilityLabel='Start the app'
        /> */}
      </View>
    </View>
  );
};

export default OnboardingPageFour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 0,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
  text: {
    paddingTop: 80,
    paddingBottom: 45,
    fontFamily: 'Lato-Regular',
    fontSize: 36,
    color: '#007C7C',
  },
  button: {
    backgroundColor: '#C4C4C4',
    borderRadius: 7,
    marginBottom: '2%',
  },
  picker: {
    backgroundColor: '#9FD5C8',
    marginTop: 87,
  },
});
