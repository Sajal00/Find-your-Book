import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

const Login = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      // Client ID of type WEB for your server (needed
      // to verify user ID and offline access)
      webClientId:
        '991595151177-jp44i2jonfvljgqenkqt0s0l6cb9sodf.apps.googleusercontent.com',
      scopes: ['emai'],
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.configure();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

export default Login;
