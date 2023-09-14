import React from "react";
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
} from "react-native";
import styles from "./folder.style";
import { Link } from "expo-router";
import { COLORS } from "../../constants/theme";

const Folder = (data) => {
  console.log("Notebook data: infomation ", data.information.name);
  return (
    // <View style={{backgroundColor:COLORS.dovegrey}}>    
    <Pressable style={{padding:20 , margin:10 , display:"flex" , flexDirection:"row"}}>
      <View style={styles.container}>
        <Text>{data.information.name}</Text>
        <View style={styles.square} />  
        <View style={{marginTop:5}}>        
          <Button
          title="OPEN"
          onPress={() => {
            console.log("opening url: ", data.information.link);
            return Linking.openURL(data.information.link);
          }}

        ></Button>
        </View>
      </View>
    </Pressable>
  // </View>

  );
};



export default Folder;
