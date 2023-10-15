import { Redirect } from "expo-router";
import { Pressable, Link } from "react-native";
import supabase from "../supabase";
import { React, useEffect, useState } from "react";
import { View, Text, SafeAreaView, TextInput, Button } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { ScrollView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import LoggedInForm from "../components/authentication/LoggedInForm";
import * as SecureStore from "expo-secure-store";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedin] = useState(false);

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  async function signInWithEmail() {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: `${email}`,
      password: `${password}`,
    });

    if (error) {
      alert(error.message);
      return;
    } else {
      setLoggedin(true);
      console.log("USERID", data);
      console.log(data.user.identities[0].id);
      let { data: insertdata, error: inserterror } = await supabase
        .from("User")
        .select("id")
        .eq("user_id", data.user.identities[0].id);
      // take the user
      let value = insertdata[0].id;
      console.log("login user value at login.js", value);
      save("id", value.toString());
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.mauve1 }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: COLORS.mauve1 },
        }}
      />
      {!loggedIn ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: "100vh",
              width: "100%",
              flex: 1,
              padding: SIZES.medium,
            }}
          >
            <LoggedInForm
              setEmail={setEmail}
              setPassword={setPassword}
              signInWithEmail={signInWithEmail}
            />
          </View>
        </ScrollView>
      ) : (
        <Redirect href="/home" />
      )}
    </SafeAreaView>
  );
};

export default login;
