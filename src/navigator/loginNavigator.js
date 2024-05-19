import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../pages/loginStack/login';
import SignUpScreen from '../pages/loginStack/SignUpScreen';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

export const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="login">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
