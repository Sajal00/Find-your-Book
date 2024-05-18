import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Dimensions,
    KeyboardAvoidingView,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
    TouchableOpacity
} from 'react-native';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import loginStyles from "../../assets/styles/pages/login"

const Login = (props) => {

    const refreshHandler = () => {
        // reset all 
    }

    const headerComponent = () => {
        return (

            <KeyboardAvoidingView style={{ height: deviceHeight, width: deviceWidth, }} behavior="padding">
                <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View style={loginStyles.mainContainer}>
                        <View style={{ height: 20 }} />
                        <TouchableWithoutFeedback
                            onPress={() => {
                                Keyboard.dismiss();
                            }}
                        >
                            <>
                                <TouchableOpacity onPress={() => props.navigation.navigate('homeNavigator')}>
                                    <Text style={loginStyles.text}>welcome to login</Text>
                                </TouchableOpacity>
                            </>
                        </TouchableWithoutFeedback>

                        <View style={{ height: 40 }} />
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }

    return (
        <>
            <FlatList
                style={loginStyles.container}
                data={[]}
                keyExtractor={() => "key"}
                renderItem={null}
                ListHeaderComponent={headerComponent()}
                onRefresh={() => refreshHandler()}
                refreshing={false}>
            </FlatList>
        </>
    );
}




export default Login
