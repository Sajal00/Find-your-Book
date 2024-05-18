import {
    StyleSheet,
    Dimensions
} from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Color, Padding, Border } from "../globalStyle";



const headerStyles = StyleSheet.create({
    header: {
        height: 56,
        width: deviceWidth,
        paddingVertical: 2,
        paddingHorizontal: Padding.p_mini,
        shadowOpacity: 1,
        elevation: 20,
        shadowRadius: 20,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.08)",
        alignSelf: "stretch",
        backgroundColor: Color.colorWhite,
    },
    headerFlexBox: {
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    text: {
        color: "red"
    }
});

export default headerStyles;