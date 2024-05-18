import {
    StyleSheet,
    Dimensions
} from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Color, Padding, Border } from "../globalStyle";



const footerStyle = StyleSheet.create({
    mainContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: 'red'
    }
});

export default footerStyle;