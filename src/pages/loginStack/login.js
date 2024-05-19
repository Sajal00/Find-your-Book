import React, {useState, useEffect} from 'react';
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
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import loginStyles from '../../assets/styles/pages/login';

const Login = props => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      // Client ID of type WEB for your server (needed
      // to verify user ID and offline access)
      webClientId:
        '991595151177-jp44i2jonfvljgqenkqt0s0l6cb9sodf.apps.googleusercontent.com',
      scopes: ['emai'],
    });
  }, []);
  const handleSignIn = async () => {
    setErrorText(''); // Clear previous errors
    setLoading(true); // Start loading indicator

    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case 'auth/invalid-email':
          setErrorText('Invalid email format.');
          break;
        case 'auth/user-not-found':
          setErrorText('No user found with this email.');
          break;
        case 'auth/wrong-password':
          setErrorText('Incorrect password.');
          break;
        default:
          setErrorText('Please check your email or password.');
          break;
      }
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };
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

  const refreshHandler = () => {
    // reset all
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
                  <Text style={styles.title}>Login</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  {errorText ? (
                    <Text style={styles.errorText}>{errorText}</Text>
                  ) : null}
                  {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                  ) : (
                    <Button title="Login" onPress={handleSignIn} />
                  )}
                  <View style={styles.signUpContainer}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity>
                      <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                  <GoogleSigninButton
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn}
                  />
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
        style={loginStyles.container}
        data={[]}
        keyExtractor={() => 'key'}
        renderItem={null}
        ListHeaderComponent={headerComponent()}
        onRefresh={() => refreshHandler()}
        refreshing={false}></FlatList>
    </>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  signUpContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
  },
  signUpText: {
    fontWeight: 'bold',
  },
  googleButton: {
    alignSelf: 'center',
  },
});
