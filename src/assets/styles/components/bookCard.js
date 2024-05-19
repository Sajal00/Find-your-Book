import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color, Padding, Border, FontFamily, FontSize} from '../globalStyle';

const bookCardStyle = StyleSheet.create({
  mainContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    height: deviceHeight / 2.5,
    width: deviceWidth / 2.2,
    backgroundColor: Color.transBlack,
    borderRadius: Border.br_mini,
    marginRight: 2,
    marginBottom: 5,
  },
  text: {
    color: Color.textDarkGrey,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    marginBottom: 2,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  Bookimage: {
    height: deviceHeight / 4,
    width: deviceWidth / 2.2,
    borderRadius: Border.br_11xs,
    marginBottom: 5,
    borderRadius: Border.br_mini,
  },
  searchIconContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
});

export default bookCardStyle;
