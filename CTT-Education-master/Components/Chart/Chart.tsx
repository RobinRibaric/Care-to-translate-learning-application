import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import Colors from '../../constants/Colors';
import { FontDisplay } from 'expo-font';

export default class PieChartWithDynamicSlices extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: '',
        value: 0,
      },
      labelWidth: 0,
    };
  }
  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ['google', 'facebook'];
    const values = [1, 27];
    const colors = [Colors.primary, 'white'];
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: { fill: colors[index] },
        arc: { outerRadius: label === key ? '100%' : '105%', padAngle: 0.01 },
        onPress: () => {
          if (label === key) {
            this.setState({ selectedSlice: { label: '', value: 0 } });
          } else {
            this.setState({
              selectedSlice: { label: key, value: values[index] },
            });
          }
        },
      };
    });
    const deviceWidth = Dimensions.get('window').width;

    return (
      <View style={{ justifyContent: 'center', marginTop: 10, flex: 1 }}>
        <PieChart
          style={{ height: 116, width: 132 }}
          outerRadius={'93%'}
          innerRadius={'60%'}
          startAngle={Math.PI * 1}
          endAngle={-Math.PI * 1}
          data={data}
        />
        <Text
          onPress={() =>
            this.setState({ selectedSlice: { label: '', value: 0 } })
          }
          onLayout={({
            nativeEvent: {
              layout: { width },
            },
          }) => {
            this.setState({ labelWidth: width });
          }}
          style={{
            position: 'absolute',
            // transform: [{ translateY: '-50%' }],
            left: deviceWidth / 7 - labelWidth / 4,
            textAlign: 'center',
            color: 'white',
            fontSize: 18,
            fontFamily: 'Lato-Bold',
          }}
        >
          {`${((values[0] / (values[0] + values[1])) * 100).toFixed(0)}%`}
        </Text>
      </View>
    );
  }
}
