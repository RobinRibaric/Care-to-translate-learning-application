import React, { ReactElement } from 'react';
import PieChartWithCenteredLabels from '../Chart/Chart';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/Colors';
import { useSelector } from 'react-redux';
import Progress from '../../assets/images/progress.svg';
//@ts-ignore
import PieChart from 'react-native-pie-chart';

const chart_wh = 120;
const series = [123, 321];
const sliceColor = ['#007C7C', 'white'];

const LessonProgress: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <PieChartWithCenteredLabels />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Lessons</Text>
        <Text style={styles.numbers}>
          <Text>0</Text>/28
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#rgba(0,0,0,0)',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 340,
    height: 115,
    marginVertical: '5%',
    borderRadius: 9,
  },
  textContainer: {},
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
  numbers: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: '#fff',
  },
  gauge: {
    position: 'absolute',
    width: 123,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 28,
  },
});

export default LessonProgress;
