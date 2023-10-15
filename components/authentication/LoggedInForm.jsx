import React from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import styles from "./LoggedInForm.style";
// import { Redirect } from "expo-router";
import { Link } from "expo-router";

const LoggedInForm = ({ signInWithEmail, setEmail, setPassword }) => {
  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.topTitle}>Welcome to ShareNotes.</Text>
      </View>

      <View style={styles.dataContainer}>
        <Text style={{ left: 15 }}>Enter your email</Text>
        <TextInput
          style={styles.emailLog}
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={{ left: 15 }}>Password</Text>
        <TextInput
          style={styles.passwordLog}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Pressable style={styles.logButton} onPress={signInWithEmail}>
          <Text
            style={{
              fontFamily: FONTS.regular,
              textAlign: "center",
              fontSize: SIZES.large,
              bottom: 5,
            }}
          >
            LogIn
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoggedInForm;
