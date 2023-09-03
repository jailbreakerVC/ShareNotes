import { SIZES, COLORS, FONTS } from "../../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topContainer: {
    marginTop: 100,
    padding: SIZES.medium,
  },

  topTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.xxxLarge,
    textAlign: "center",
    position: "relative",
    top: 35,
    right: 4,
  },
  dataContainer: {
    marginTop: 100,
  },
  emailLog: {
    fontFamily: FONTS.regular,
    borderRadius: 20,
    height: 50,
    margin: 15,
    borderWidth: 1,
    borderColor: "#383838",
    padding: 10,
  },
  passwordLog: {
    fontFamily: FONTS.regular,
    borderRadius: 20,
    height: 50,
    margin: 15,
    borderWidth: 1,
    borderColor: "#383838",
    padding: 10,
  },
  logButton: {
    height: 40,
    // width: 355,
    // borderRadius: 20,
    // borderWidth: 1,
    // borderColor: "#fff",
    // padding: 10,
    // left: 11,
    // marginTop: 16,
    // backgroundColor: COLORS.green1,
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
    marginTop: 20,
    backgroundColor: COLORS.blue3,
  },
});

export default styles;
