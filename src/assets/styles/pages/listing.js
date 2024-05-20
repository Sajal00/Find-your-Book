import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color, FontSize, Border, Padding} from '../globalStyle';

const dashboardStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  container: {
    height: deviceHeight,
    width: deviceWidth,
    flex: 1,
  },
  keyboardAvoidingViewStyle: {
    height: deviceHeight,
    width: deviceWidth,
  },
  safeAreaViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
  },
  BookContentcontainer: {
    flex: 1,
  },
  BoonContentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  noBooksText: {
    fontSize: 18,
    color: 'gray',
  },
  noBooksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default dashboardStyles;
