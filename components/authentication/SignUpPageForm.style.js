import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  mainContainer: {
    padding: SIZES.xSmall,
  },

  headingTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.xxxLarge,
    textAlign: "center",
    position: "relative",
    top: 35,
    right: 4,
  },

  inputContainer: {
    marginTop: 200,
  },

  SignUpemailInput: {
    fontFamily: FONTS.regular,
    borderRadius: 20,
    height: 50,
    margin: 15,
    borderWidth: 1,
    padding: 10,
  },

  passwordSignUpInput: {
    fontFamily: FONTS.regular,
    borderRadius: 20,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  signUpButton: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: ,
    marginLeft: 40,
    marginRight: 40,
    width: "10",
    borderRadius: 20,
    borderWidth: 1,
    //     //     left: 50,
    padding: 10,
    marginTop: 10,
    backgroundColor: COLORS.blue3,
  },

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
