import { StyleSheet } from "react-native";
import { FONTS , SIZES , COLORS } from "../../constants/theme";


const styles = StyleSheet.create({
    container: {
        marginTop:30,
        // backgroundColor:COLORS.b
        alignItems: "center",
        justifyContent: "center",
        width: 128, // Adjust the size as needed
        height: 129, // Adjust the size as needed
      },
      square: {

        width: "100%",
        height: "100%",
        backgroundColor: COLORS.blue2,
        borderWidth: 2, // Border width to mimic a pencil-like border
        borderColor: "black", // Border color
        borderRadius: 15, // Adjust the radius to make the corners rounded
      },
})


export default styles