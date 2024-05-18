import {
    StyleSheet,
    Dimensions
} from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Color, FontSize, Border, Padding } from "../globalStyle";


const videoDetailsStyle = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: 'center'
    },
    text: {
        color: "red"
    }
});

export default videoDetailsStyle;