import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Onboarding from '../Navigation/OnBoardingScroll';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/MainApp/Home';
import Review from '../Screens/MainApp/Review';
import Settings from '../Screens/MainApp/Settings';
import TestScreenOne from '../Screens/Tests/TestScreenOne';
import TestScreenTwo from '../Screens/Tests/TestScreenTwo';
import TestScreenThree from '../Screens/Tests/TestScreenThree';
import TestScreenFour from '../Screens/Tests/TestScreenFour';
import TestScreenFive from '../Screens/Tests/TestScreenFive';
import { SimpleLineIcons } from '@expo/vector-icons';
import Quit from '../Screens/Tests/Quit';
import SelectLanguageSetting from '../Screens/MainApp/SelectLanguageSettings';
// import { useDispatch } from 'react-redux';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: '#fff',
        style: {
          backgroundColor: Colors.secondary,
          // backgroundColor: 'rgba(0,124,124,0.2)',
          // opacity: 0.5,
          paddingTop: 4,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name='home' size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Review'
        component={Review}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name='notebook' size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingStackNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name='settings' size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

export const TestNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='TestScreenOne' headerMode='none'>
      <Stack.Screen name='TestScreenOne' component={TestScreenOne} />
      <Stack.Screen name='TestScreenTwo' component={TestScreenTwo} />
      <Stack.Screen name='TestScreenThree' component={TestScreenThree} />
      <Stack.Screen name='TestScreenFour' component={TestScreenFour} />
      <Stack.Screen name='TestScreenFive' component={TestScreenFive} />
      <Stack.Screen name='Quit' component={Quit} />
    </Stack.Navigator>
  );
};

const SettingStack = createStackNavigator();

export const SettingStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Settings' headerMode='none'>
      <Stack.Screen name='Settings' component={Settings} />
      <Stack.Screen
        name='SelectLanguageSetting'
        component={SelectLanguageSetting}
      />
    </Stack.Navigator>
  );
};
