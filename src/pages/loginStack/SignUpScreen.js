import {
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import loginStyles from '../../assets/styles/pages/login';

import auth from '@react-native-firebase/auth';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const SignUpScreen = props => {
  const [errorText, setErrorText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const refreshHandler = () => {
    setName('');
    setEmail('');
    setPhoneno('');
    setPassword('');
    setErrorText('');
    setLoading(false);
  };

  const handleLogin = navigation => {
    props.navigation.navigate('login');
  };
  const handleSignUp = async () => {
    setErrorText(''); // Clear previous errors

    // Validate the required fields
    if (!name || !email || !phoneno || !password) {
      setErrorText('Please fill in all the fields.');
      return;
    }

    setLoading(true); // Start loading indicator
    try {
      const userdata = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(userdata);
      // navigation.navigate('Main');
      console.log('User account created & signed in!');
      // Handle successful login (e.g., navigation to another screen)
      // navigation.replace("HomeScreen");
      props.navigation.navigate('homeNavigator');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };
  const headerComponent = () => {
    return (
      <KeyboardAvoidingView
        style={{height: deviceHeight, width: deviceWidth}}
        behavior="padding">
        <SafeAreaView
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={loginStyles.mainContainer}>
            <View style={{height: 20}} />
            <TouchableWithoutFeedback
              onPress={() => {
                Keyboard.dismiss();
              }}>
              <>
                <View>
                  <Text style={loginStyles.title}>Sign Up</Text>
                  <TextInput
                    style={loginStyles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TextInput
                    style={loginStyles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TextInput
                    style={loginStyles.input}
                    onChangeText={setPhoneno}
                    value={phoneno}
                    placeholder="Phone No"
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TextInput
                    style={loginStyles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                  />
                  {errorText ? (
                    <Text style={loginStyles.errorText}>{errorText}</Text>
                  ) : null}
                  {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                  ) : (
                    <Button title="Sign Up" onPress={handleSignUp} />
                  )}

                  <View style={loginStyles.signUpContainer}>
                    <Text>Already Have Account? </Text>
                    <TouchableOpacity onPress={handleLogin}>
                      <Text style={loginStyles.signUpText}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            </TouchableWithoutFeedback>

            <View style={{height: 40}} />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  };

  return (
    <>
      <FlatList
        style={loginStyles.myContainer}
        data={[]}
        keyExtractor={() => 'key'}
        renderItem={null}
        ListHeaderComponent={headerComponent()}
        onRefresh={() => refreshHandler()}
        refreshing={false}></FlatList>
    </>
  );
};

export default SignUpScreen;
