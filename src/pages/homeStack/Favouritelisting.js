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
} from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import DefaultHeader from '../../components/header';
import {Color} from '../../assets/styles/globalStyle';
import detailsStyle from '../../assets/styles/pages/details';

const Details = props => {
  const headerComponent = () => {
    return (
      // <KeyboardAvoidingView style={detailsStyle.keyboardAvoidingViewStyle} behavior="padding">
      <SafeAreaView style={detailsStyle.safeAreaViewStyle}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <Text style={detailsStyle.text}>welcome to favouritelisting</Text>
        </TouchableWithoutFeedback>
      </SafeAreaView>
      // </KeyboardAvoidingView>
    );
  };
  const refreshHandler = () => {
    //reset all
  };

  return (
    <View style={detailsStyle.mainContainer}>
      <StatusBar
        backgroundColor={Color.black}
        translucent={false}
        barStyle="light-content"
      />
      <DefaultHeader />
      <FlatList
        style={detailsStyle.container}
        data={[]}
        keyExtractor={() => 'key'}
        renderItem={null}
        ListHeaderComponent={headerComponent()}
        onRefresh={() => refreshHandler()}
        refreshing={false}></FlatList>
    </View>
  );
};

export default Details;
