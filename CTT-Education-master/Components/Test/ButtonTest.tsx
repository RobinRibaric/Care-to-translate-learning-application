import React, { ReactElement } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Colors from '../../constants/Colors';

interface Props {
  ButtonState: string;
  // style: StyleProp<ViewStyle>;
}
const ButtonTest: React.FC<Props> = ({ ButtonState }) => {
  return (
    <View
      style={[
        styles.defaultContainer,
        ButtonState === 'selected' || ButtonState === 'done'
          ? styles.activeContainer
          : styles.defaultContainer,
      ]}
    >
      <View>
        <Text
          style={[
            styles.title,
            ButtonState === 'selected' || ButtonState === 'done'
              ? styles.titleActive
              : styles.title,
          ]}
        >
          {ButtonState === 'done' ? 'Next' : 'Check'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultContainer: {
    backgroundColor: 'rgba(255,255,255,0.0)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 15,
    borderColor: Colors.primary,
    shadowColor: '#000',
    paddingVertical: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    color: Colors.primary,
    fontFamily: 'Lato-Regular',
  },
  activeContainer: {
    backgroundColor: Colors.primary,
  },
  titleActive: {
    color: '#fff',
  },
});

export default ButtonTest;
