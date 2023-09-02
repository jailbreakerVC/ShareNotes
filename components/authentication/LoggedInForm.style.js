import { SIZES , COLORS , FONTS } from "../../constants/theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    topContainer:{
        marginTop: 100,
        padding:SIZES.medium,
    },

    topTitle:{
        fontFamily: FONTS.regular,
        fontSize:SIZES.xxxLarge,
        textAlign: "center",
        position: "relative",
        top: 35, 
        right:4,
    },
    dataContainer:{
        marginTop:150
    },
    emailLog:{
        fontFamily: FONTS.regular,
        borderRadius:20,
        height: 50,
        margin:15,
        borderWidth:1,
        borderColor:"#383838",
        padding: 10,
    },
    passwordLog:{
        fontFamily: FONTS.regular,
        borderRadius:20,
        height: 50,
        margin:15,
        borderWidth:1,
        borderColor:"#383838",
        padding: 10,
    },
    logButton:{
        height:50, 
        width:355,
        borderRadius:20,
        borderWidth:1,
        borderColor:"#fff",
        padding:10,
        left:11,
        marginTop:16,
        backgroundColor: COLORS.green1,   
    
    }
})


export default styles;