import React from "react";
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
} from "react-native";
import { Link } from "expo-router";

const Folder = (data) => {
  console.log("Notebook data: infomation ", data.information.name);
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.square} />
        <Text>{data.information.name}</Text>
        <Button
          title="OPEn"
          onPress={() => {
            console.log("opening url: ", data.information.link);
            return Linking.openURL(data.information.link);
          }}
        ></Button>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
  },
  square: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderWidth: 2, // Border width to mimic a pencil-like border
    borderColor: "black", // Border color
    borderRadius: 15, // Adjust the radius to make the corners rounded
  },
});

export default Folder;
