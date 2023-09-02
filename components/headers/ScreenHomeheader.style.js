import { StyleSheet } from "react-native";
import { COLORS, FONTS , SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
        btnContainer: {
          width: 40,
          height: 40,
          borderRadius: SIZES.small / 1.25,
          justifyContent: "center",
          alignItems: "center",
        },
        btnImg: (dimension) => ({
          width: dimension,
          height: dimension,
          borderRadius: SIZES.small / 1.25,


        }),   
})


export default styles;