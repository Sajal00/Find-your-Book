import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color, Padding, Border} from '../globalStyle';

const loginStyles = StyleSheet.create({
  myContainer: {
    flex: 1,
    // width: "100%",
    backgroundColor: Color.white,
  },
  mainContainer: {
    height: deviceHeight / 1.1,
    width: deviceWidth / 1.05,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    borderRadius: 10,
    backgroundColor: Color.white,
  },
  text: {
    color: 'red',
  },
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

export default loginStyles;
