import {
    StyleSheet,
    Dimensions
} from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Color, Padding, Border } from "../globalStyle";

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        // width: "100%",
        backgroundColor: Color.white
    },
    mainContainer: {
        height: deviceHeight / 1.1,
        width: deviceWidth / 1.05,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        borderRadius: 10,
        backgroundColor: Color.white
    },
    text: {
        color: 'red'
    }
});

export default loginStyles