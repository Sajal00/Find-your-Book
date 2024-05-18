import React, { useState, useEffect, useRef } from 'react';
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
    StatusBar
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import splashStyle from '../../assets/styles/pages/splash'
import { Color } from '../../assets/styles/globalStyle';
const Splash = (props) => {

    useEffect(() => {
        const initializeApp = async () => {
            setTimeout(() => {
                props.navigation.replace('loginNavigator')
            }, 1000);
        };

        initializeApp();
    }, [])

    return (
        <View style={splashStyle.mainContainer}>
            <StatusBar backgroundColor={Color.black} translucent={false} barStyle="light-content" />
            <Text style={splashStyle.text}>welcome to splash</Text>

        </View>
    );
}

export default Splash;
