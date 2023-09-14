import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Notebook = (data) => {
  console.log("Notebook data: ", data);

  // async function onPressNotebook() {
  //   return <Redirect href="/home" />;
  // }
  return (
    //pressable onpress not working
    <Pressable
      onPresss={() => {
        router.push({
          pathname: "/notebooks/[name]",
          params: {
            name: data.information.name.toString(),
            id: data.information.id.toString(),
          },
        });
      }}
      // id={data.information.id}
    >
      <View style={styles.container}>
        <View style={styles.square} />
        <Link
          href={{
            pathname: "/notebooks/[name]",
            params: {
              name: data.information.name.toString(),
              id: data.information.id.toString(),
            },
          }}
        >
          ${data.information.name}
        </Link>
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

export default Notebook;
