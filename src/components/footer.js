import React, { useState, useEffect, useRef, useReducer } from 'react';
import {
    Text,
    View,
    Dimensions,
    Stylesheet,
    ImageBackground,
    Image,
    Pressable,
    Button,
    Modal,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import Icon from 'react-native-vector-icons/FontAwesome';
import footerStyle from '../assets/styles/components/footer'
import { Color, FontSize, FontFamily } from '../assets/styles/globalStyle'

const Footer = (props) => {

    return (
        <>
            <View style={footerStyle.footerFlexBox}>
                <Text style={footerStyle.text}>welcome to footer</Text>
            </View>
        </>
    );
}



export default Footer;
