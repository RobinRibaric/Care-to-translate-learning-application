import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestScreenOne from './TestScreenOne';
import TestScreenTwo from './TestScreenTwo';
import TestScreenThree from './TestScreenThree';
import TestScreenFour from './TestScreenFour';
import TestScreenFive from './TestScreenFive';

const Navigator: React.FC = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TestScreenOne">
        <Stack.Screen name="TestScreenOne" component={TestScreenOne} />
        <Stack.Screen name="TestScreenTwo" component={TestScreenTwo} />
        <Stack.Screen name="TestScreenThree" component={TestScreenThree} />
        <Stack.Screen name="TestScreenFour" component={TestScreenFour} />
        <Stack.Screen name="TestScreenFive" component={TestScreenFive} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default Navigator;
