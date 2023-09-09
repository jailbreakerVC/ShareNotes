import { useLocalSearchParams } from "expo-router";
import { Stack, Slot } from "expo-router";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { useEffect, useState } from "react";
import supabase from "../../supabase";
import Notebook from "../../components/Notebook";
import Folder from "../../components/folder";

export default function folderpage() {
  const { name } = useLocalSearchParams();
  const { id } = useLocalSearchParams();
  const [notes, setNotes] = useState([]);

  console.log("param data: ", id);

  async function getAllNoteForAFolder(id) {
    let { data: Notes, error } = await supabase
      .from("Note")
      .select("*")
      .eq("parent", `${id}`);
    // console.log(`All notes in Folder ${id}: `, Notes);
    if (Notes) {
      setNotes(Notes);
    } else return;
  }
  useEffect(() => {
    getAllNoteForAFolder(id);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.orange2 }}>
      <Stack.Screen
        options={{
          headerTitle: `${name}`,
          headerStyle: { backgroundColor: COLORS.orange2 },
          headerTitleStyle: {
            fontFamily: FONTS.regular,
            fontSize: SIZES.xxLarge,
          },
          headerShadowVisible: false,
        }}
      />

      <View style={name.parentView}>
        {notes ? (
          notes.map((data) => <Folder information={data} />)
        ) : (
          <Text>No notes exist </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const name = StyleSheet.create({
  parentView: {
    marginTop: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
