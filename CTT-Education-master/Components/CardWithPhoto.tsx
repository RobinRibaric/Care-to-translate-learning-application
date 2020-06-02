import React, { ReactElement } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { skipButton } from '../Store/Action/appState';
import { activeCategory } from '../Store/Action/Language';

interface Props {
  title: string;
  onPress: () => void;
}

const Card: React.FC<Props> = ({ title, onPress, children }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>{children}</View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 340,
    height: 115,
    marginVertical: '7%',
    padding: 10,
    borderRadius: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontSize: 24,
    color: Colors.primary,
  },
});

export default Card;
