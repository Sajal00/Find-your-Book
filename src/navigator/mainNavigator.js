import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashNavigator } from './splashNavigator';
import { LoginNavigator } from "./loginNavigator"
import { HomeNavigator } from './homeNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const screenOptionStyle = {
        headerShown: false
    };
    const MainNavigator = () => {
        return (
            <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="splashNavigation" >
                <Stack.Screen name="splashNavigation" component={SplashNavigator} />
                <Stack.Screen name="loginNavigator" component={LoginNavigator} />
                <Stack.Screen name="homeNavigator" component={HomeNavigator} />
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
}