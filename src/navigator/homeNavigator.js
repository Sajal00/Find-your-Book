import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Listing from '../pages/homeStack/listing';
import Favouritelisting from '../pages/homeStack/Favouritelisting';
const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName="listing">
      <Stack.Screen name="listing" component={Listing} />
      <Stack.Screen name="favouritelisting" component={Favouritelisting} />
    </Stack.Navigator>
  );
};
