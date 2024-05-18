import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Listing from "../pages/homeStack/listing";
import Details from '../pages/homeStack/details'
const Stack = createNativeStackNavigator();

const screenOptionStyle = {
    headerShown: false
};

export const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="listing">
            <Stack.Screen name="listing" component={Listing} />
            <Stack.Screen name="details" component={Details} />
        </Stack.Navigator>
    );
}