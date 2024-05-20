import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color, Padding, Border, FontSize, FontFamily} from '../globalStyle';

const headerStyles = StyleSheet.create({
  header: {
    height: deviceHeight / 14,
    width: deviceWidth,
    paddingVertical: 2,
    paddingHorizontal: Padding.p_mini,
    elevation: 20,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    backgroundColor: Color.colorWhitesmoke_300,
  },
  headerFlexBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  text: {
    color: Color.textDarkGrey,
    fontSize: FontSize.size_2nl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: 'bold',
  },
  input: {
    height: deviceHeight / 14,
    width: deviceWidth / 1.03,
    alignSelf: 'center',
  },
  searchContainer: {
    backgroundColor: Color.textWhite,
    position: 'absolute',
    top: 50,
    left: 5,
    width: deviceWidth / 1.03,
    height: deviceHeight / 14,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: Border.br_3xs,
    paddingLeft: 10,
  },
  searchIconContainer: {
    alignSelf: 'flex-end',
    alignSelf: 'center',
  },
  heartIconContainer: {
    alignSelf: 'flex-end',
    alignSelf: 'center',
    marginLeft: deviceWidth / 3.5,
  },
  backIconContainer: {
    alignSelf: 'flex-start',
    alignSelf: 'center',
  },
});

export default headerStyles;
