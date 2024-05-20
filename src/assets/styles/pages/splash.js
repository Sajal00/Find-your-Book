import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {Color, Padding, Border} from '../globalStyle';

const splashStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  text: {
    fontSize: 15,
    fontStyle: 'normal',
    color: 'red',
    padding: 20,
  },
  text2: {
    fontSize: 25,
    fontStyle: 'normal',
    color: 'red',
  },
  round: {
    height: deviceHeight / 3,
    width: deviceWidth / 1.5,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: 120,
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
});

export default splashStyle;
