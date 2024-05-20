import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  Animated,
  Linking,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import splashStyle from '../../assets/styles/pages/splash';
import {Color} from '../../assets/styles/globalStyle';
const Splash = props => {
  useEffect(() => {
    const initializeApp = async () => {
      setTimeout(() => {
        props.navigation.replace('loginNavigator');
      }, 1000);
    };

    initializeApp();
  }, []);

  return (
    <View style={splashStyle.mainContainer}>
      <StatusBar
        backgroundColor={Color.black}
        translucent={false}
        barStyle="light-content"
      />

      <Image
        style={splashStyle.round}
        source={{
          uri: 'https://www.welikela.com/wp-content/uploads/2016/01/last-bookstore-book-display.jpg',
        }}
      />

      <Text style={splashStyle.text}>Welcome</Text>
      <Text style={splashStyle.text2}>W3 Books</Text>
      <ActivityIndicator style={{padding: 20}} />
    </View>
  );
};

export default Splash;
