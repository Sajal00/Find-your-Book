import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Dimensions,
  FlatList,
  Keyboard,
  StatusBar,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import DefaultHeader from '../../components/header';
import DefaultFooter from '../../components/footer';
import {Color} from '../../assets/styles/globalStyle';
import listingStyle from '../../assets/styles/pages/listing';
import Toast from 'react-native-simple-toast';

const api = require('../../api/index');

const Listing = props => {
  api.setNavigation(props.navigation);

  useEffect(() => {
    // getData()
  }, []);

  const getData = () => {
    api.bookApiHelper(
      {searchValue: 'all', offset: 0, limit: 10},
      'GET',
      'search_book',
      (e, r) => {
        if (e) {
          // console.log("language text error!" + e);
        } else {
          // console.log('language text result: ', r);
          if (r.status_code == 200) {
            let data = JSON.stringify(r.data);
            console.log('data==>', data);
          } else if (r.status_code == 203) {
            if (count < 2) {
              Toast.showWithGravity(
                r.message ? r.message : '',
                Toast.SHORT,
                Toast.CENTER,
              );
            }
          } else {
            null;
          }
        }
      },
    );
  };

  const headerComponent = () => {
    return (
      // <KeyboardAvoidingView style={listingStyle.keyboardAvoidingViewStyle} behavior="padding">
      <SafeAreaView style={listingStyle.safeAreaViewStyle}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('details')}>
            <Text style={listingStyle.text}>welcome to listing</Text>
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </SafeAreaView>
      // </KeyboardAvoidingView>
    );
  };
  const refreshHandler = () => {
    //reset all
  };

  return (
    <View style={listingStyle.mainContainer}>
      <StatusBar
        backgroundColor={Color.black}
        translucent={false}
        barStyle="light-content"
      />
      <DefaultHeader />
      <FlatList
        style={listingStyle.container}
        data={[]}
        keyExtractor={() => 'key'}
        renderItem={null}
        ListHeaderComponent={headerComponent()}
        onRefresh={() => refreshHandler()}
        refreshing={false}></FlatList>
      <DefaultFooter />
    </View>
  );
};

export default Listing;
