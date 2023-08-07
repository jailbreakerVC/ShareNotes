import { StyleSheet } from "react-native";
import { COLORS , FONTS, SIZES } from "../constants/theme";



const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightLime,
        width:"100%",
        height:"100%"
    },

    title:{
        fontSize: SIZES.xLarge,
        paddingTop: 10,
        fontFamily: FONTS.regular
    }


})


export default styles;