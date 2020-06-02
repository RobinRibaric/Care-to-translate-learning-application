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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { skipButton } from '../../Store/Action/appState';
import { activeCategory } from '../../Store/Action/Language';
import CardWithPhoto from '../../Components/CardWithPhoto';
import Mistakes from '../../assets/images/mistake.svg';
import FlashCrads from '../../assets/images/flashCards.svg';

const Review = () => {
  // const dispatch = useDispatch();
  // const selectedLanguage = useSelector(
  //   (state: RootState) => state.LanguageReducer.selectedLanguage
  // );

  return (
    <View style={styles.OuterContainer}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.title}>Review</Text>
        </View>
        <View style={styles.cardContainer}>
          <CardWithPhoto
            title='Review mistakes'
            onPress={() => {}}
            //   dispatch(skipButton('testScreen'));
            //   dispatch(activeCategory(item.name));
            // }}
          >
            <Mistakes width={69} height={59} />
          </CardWithPhoto>
          <CardWithPhoto
            title='Flash Cards'
            onPress={() => {}}

            // onPress={() => {
            //   dispatch(skipButton('testScreen'));
            //   dispatch(activeCategory(item.name));
            // }}
          >
            <FlashCrads width={69} height={59} />
          </CardWithPhoto>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  OuterContainer: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  cardContainer: {
    // alignItems: 'center',
    width: '100%',
    paddingLeft: 20,
  },
  title: {
    paddingVertical: 30,
    fontFamily: 'Lato-Bold',
    fontSize: 45,
    color: 'white',
  },
});

export default Review;
