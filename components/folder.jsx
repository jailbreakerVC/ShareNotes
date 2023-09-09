import React from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";

const Folder = (data) => {
  console.log("Notebook data: infomation ", data.information.name);
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.square} />
        <Text>{data.information.name}</Text>
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
