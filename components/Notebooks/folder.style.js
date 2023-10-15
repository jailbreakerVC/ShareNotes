import { StyleSheet } from "react-native";
import {COLORS , FONTS , SIZES} from "../../constants/theme"


const styles = StyleSheet.create({
 container: {
    // padding
    marginTop:40,
    // backgroundColor:COLORS.dovegrey,
    alignItems: "center",
    justifyContent: "center",
    width: 130, // Adjust the size as needed
    height: 130, // Adjust the size as needed
  },
  square: {
    // backgroundColor:COLORS.mauve1,
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.blue2,
    borderWidth: 2, // Border width to mimic a pencil-like border
    borderColor: "black", // Border color
    borderRadius: 15, // Adjust the radius to make the corners rounded
  },
})


export default styles;