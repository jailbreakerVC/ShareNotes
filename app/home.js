import { Text, SafeAreaView, View, ScrollView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import styles from "../styles/search";
import ScreenHomeHeaderBtn from "../components/headers/ScreenHomeHeaderBtn";
import icons from "../constants/icons";
import supabase from "../supabase";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import Notebook from "../components/Notebook";

const Home = () => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getAllFoldersForUser() {
    const user_key = await SecureStore.getItemAsync("id");
    let { data: Folders, error } = await supabase
      .from("Folder")
      .select("*")
      .eq("creator", `${user_key}`);
    console.log(`All folders for user ${user_key}`, Folders);
    if (Folders) {
      setFolders(Folders);
    } else return;
  }
  useEffect(() => {
    getAllFoldersForUser().then(setLoading(false));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.orange1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.orange1 },
          headerShadowVisible: { backgroundColor: COLORS.green2 },
          headerTitle: "notebooks",
          headerTitleStyle: {
            fontFamily: FONTS.regular,
            fontSize: SIZES.xxLarge,
          },
          headerRight: () => (
            <ScreenHomeHeaderBtn iconUrl={icons.share} dimensions="100%" />
          ),
        }}
      />

      {/* loading? <Notebook></Notebook> */}
      <View style={home.parentView}>
        {/* <ScrollView style> */}
        {folders ? (
          folders.map((data) => <Notebook information={data} />)
        ) : (
          <Text>No notebooks exist </Text>
        )}
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const home = StyleSheet.create({
  parentView: {
    marginTop: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
