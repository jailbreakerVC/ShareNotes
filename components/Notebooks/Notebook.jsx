import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import styles from "./Notebooks.style"
const Notebook = (data) => {
  console.log("Notebook data: ", data);

  // async function onPressNotebook() {
  //   return <Redirect href="/home" />;
  // }
  return (
    <View>
    {/* //pressable onpress not working */}
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

    
    </View>
  );
};



export default Notebook;
