import {SafeAreaView, View } from "react-native";
import {Stack , Slot} from "expo-router";
import { COLORS,FONTS,SIZES} from "../constants/theme";
import { ScrollView } from "react-native-gesture-handler";
import SignUpPageForm from "../components/authentication/SignUpPageForm";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from "react";


const SignUp = () =>{
   
//   const [fontLoaded] = useFonts({
//         virgilRegular : require('../assets/fonts/VirgilRegular.ttf')
//     })
   
//     // caching the layout view
//     const handleOnLayoutRootView = useCallback( async () =>{
//         if(fontLoaded){
//             await SplashScreen.hideAsync();
//         }
//     }, [fontLoaded])

//     if(!fontLoaded);
//     return <Stack onLayout={handleOnLayoutRootView} />

    return(
        <SafeAreaView style={{flex:1 , backgroundColor:COLORS.orange2}}>
            <Stack.Screen 
                options={{
                    headerTitle: "",
                    headerStyle: {backgroundColor: COLORS.orange2},
                    headerTitleStyle: {fontFamily: FONTS.regular,
                    fontSize: SIZES.xxLarge},
                    headerShadowVisible: false,
                }}
             />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        height:"100vh",
                        width:"100%",
                        padding:SIZES.medium,
                        flex:1, 
                    }}>

                    <SignUpPageForm />                    
                </View> 
            
            </ScrollView>
        

        </SafeAreaView>
        )
}


export default SignUp;