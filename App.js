// import {View, Text} from 'react-native';
// import React from 'react';
// import SignUpScreen from './root/Screens/SignUpScreen';

// const App = () => {
//   return (
//     <View>
//       <SignUpScreen />
//     </View>
//   );
// };

// export default App;
import React, {useState, useEffect, useTransition} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import AppNavigator from './src/navigator/mainNavigator';
import SplashScreen from 'react-native-splash-screen';
import {Color} from './src/assets/styles/globalStyle';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const App = ({Component, pageProps}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView
      style={{
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: Color.black,
      }}>
      <AppNavigator />
    </SafeAreaView>
  );
};
export default App;
