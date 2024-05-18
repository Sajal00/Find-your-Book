import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from "../pages/splashStack/splash";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
    headerShown: false
};

export const SplashNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="splash">
            <Stack.Screen name="splash" component={Splash} />
        </Stack.Navigator>
    );
}