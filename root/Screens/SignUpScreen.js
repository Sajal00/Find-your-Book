import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';

import auth from '@react-native-firebase/auth';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  // const handleLogin = () => {
  //   navigation.navigate('Login');
  // };
  const handleSignUp = async () => {
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

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPhoneno}
        value={phoneno}
        placeholder="Phone No"
        keyboardType="phone-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
      <Button title="Sign Up" onPress={handleSignUp}></Button>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'center',
        }}>
        <Text>Already Have Account? </Text>
        <TouchableOpacity>
          <Text style={{fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
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
});
