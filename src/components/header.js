import React, { useState, useEffect, useRef } from 'react';
import {
    Text,
    View,
    Dimensions,
} from 'react-native';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import headerStyles from '../assets/styles/components/header'

const Header = (props) => {

    return (
        <>
            <View style={[headerStyles.header, headerStyles.headerFlexBox]}>
                <Text style={headerStyles.text}>welcome to header</Text>
            </View>
        </>
    );
}



export default Header;
