import { Text, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import styles from "../styles/search";
import ScreenHomeHeaderBtn from "../components/headers/ScreenHomeHeaderBtn";
import icons from "../constants/icons";

const Home = () =>{
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.orange1}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.orange1},
                    headerShadowVisible: {backgroundColor: COLORS.green2},
                    headerTitle: "notebooks",
                    headerTitleStyle: {fontFamily: FONTS.regular , 
                        fontSize: SIZES.xxLarge
                    },
                    headerRight: () => (
                      <ScreenHomeHeaderBtn iconUrl={icons.share} dimensions="100%"/>

                    )
                    
                    
                }}
                 
            />

        </SafeAreaView>
        )
}

export default Home;