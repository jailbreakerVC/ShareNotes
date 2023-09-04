import { Text, SafeAreaView, View } from "react-native";
import { Stack } from "expo-router";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import styles from "../styles/search";
import ScreenHomeHeaderBtn from "../components/headers/ScreenHomeHeaderBtn";
import icons from "../constants/icons";
import supabase from "../supabase";
import {useEffect, useState} from "react";
import * as SecureStore from "expo-secure-store";

const Home = () =>{

    const [folders, setFolders] = useState({})
    async function getAllFoldersForUser() {
        const user_key= await SecureStore.getItemAsync("id");
        let {data: Folders, error} = await supabase
        .from("Folder")
        .select("*")
        .eq("creator",`${user_key}`)
        console.log(`All folders for user ${user_key}`,Folders[0]);
        if (Folders) {
          setFolders(Folders);
        }
        else 
        return;
      }
    useEffect(() => {
        getAllFoldersForUser()
    }, [])

    let folders_data;
    if (folders) {
        folders_data = folders.map((folder) => {
            return <View>
                <Text>
                    {folder.name}
                </Text>
            </View>
    }
    )
    }


    
    
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

            <View> 
                <Text>
                Your folders!
                </Text>
                {folders_data}
                
            </View>

        </SafeAreaView>
        )
}

export default Home;