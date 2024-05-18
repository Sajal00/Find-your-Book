import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../pages/loginStack/login";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
    headerShown: false
};

export const LoginNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="login">
            <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
    );
}