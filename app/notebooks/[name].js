import { useLocalSearchParams } from "expo-router";
import { Stack, Slot } from "expo-router";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { useEffect, useState } from "react";
import supabase from "../../supabase";
import Folder from "../../components/Notebooks/folder";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FlatList } from "react-native-gesture-handler";


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

      <View style={name.nameView}>
        {notes ? (
          <FlatList
            style={{margin:10}}
            // notes.map(()) 
            data={notes}
            horizontal showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index)=>index.toString()} 
            renderItem={({item})=>(
              <Folder information={item} />
            )}
          />
          // notes.map((data) => 
          //   <Folder information={data} />) 
        ) : (

          <Text>No notes exist </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const name = StyleSheet.create({
  nameView: {
    flexDirection:"row"
    // backgroundColor:COLORS.mauve1,
    // padding:"20px",
    // display:"flex",
    // height:100,
    // width:100,
    // position:"relative",
    // left:20,
    // marginTop: ,
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-around",
  },

});
