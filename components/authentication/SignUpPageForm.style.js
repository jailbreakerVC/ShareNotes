import {StyleSheet} from "react-native";
import {FONTS , SIZES , COLORS} from "../../constants/theme"

const styles = StyleSheet.create({

    mainContainer:{
        padding: SIZES.xSmall,     
    },

    headingTitle:{
        fontFamily: FONTS.regular,
        fontSize:SIZES.xxxLarge,
        textAlign: "center",
        position: "relative",
        top: 35, 
        right:4,

   },

   inputContainer:{
        marginTop: 200,
        
   },

   SignUpemailInput:{
        fontFamily: FONTS.regular,
        borderRadius:20,
        height: 50,
        margin:15,
        borderWidth:1,
        padding: 10,
   },

    passwordSignUpInput:{
        fontFamily:FONTS.regular,
        borderRadius:20,
        height: 50,
        margin:12,
        borderWidth:1,
        padding: 10,
   },

   signUpButton:{
        height:50, 
        width:355,
        borderRadius:20,
        borderWidth:1,
        padding:10,
        left:11,
        marginTop:16,
        backgroundColor: COLORS.blue3,
   }

})

export default styles;