import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './Navigation/RootNavigator';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { store, persistor } from './Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const fetchFonts = () => {
  return Font.loadAsync({
    'Lato-Light': require('./assets/Fonts/Lato-Light.ttf'),
    'Lato-Regular': require('./assets/Fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/Fonts/Lato-Bold.ttf'),
    'Lato-Thin': require('./assets/Fonts/Lato-Thin.ttf'),
  });
};

export default function App() {
  const [fontLoader, setFontLoader] = useState(false);

  if (!fontLoader) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoader(true)}
      ></AppLoading>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
