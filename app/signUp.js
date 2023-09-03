import { SafeAreaView, View } from "react-native";
import { Stack, Slot } from "expo-router";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { ScrollView } from "react-native-gesture-handler";
import SignUpPageForm from "../components/authentication/SignUpPageForm";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import supabase from "../supabase";
import * as SecureStore from "expo-secure-store";
import { Redirect } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedin] = useState(false);
  const [username, setUsername] = useState("");

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  async function addusertodb(data, username) {
    let { data: insertdata, error: inserterror } = await supabase
      .from("User")
      .insert([{ user_id: data.user.identities[0].id, name: username }])
      .select("id");
    // after inserting data to table, extract the id and store it in local storage
    let key = insertdata[0].id;
    console.log("KEY", key);
    save("id", key.toString());
    console.log("Data entered in db id is:", insertdata);
    console.log("Error (if any)", inserterror);
    // let result = await SecureStore.getItemAsync("id");
    // console.log("result", result);
  }
  async function SignUpUserandLogin() {
    let { signUpdata, signUperror } = await supabase.auth.signUp({
      email: `${email}`,
      password: `${password}`,
    });
    if (signUperror) {
      alert(signUperror.message);
      return;
    }
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
      await addusertodb(data, username);
      // added user data to database
    }
  }
  return !loggedIn ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.orange2 }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: COLORS.orange2 },
          headerTitleStyle: {
            fontFamily: FONTS.regular,
            fontSize: SIZES.xxLarge,
          },
          headerShadowVisible: false,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: "100vh",
            width: "100%",
            padding: SIZES.medium,
            flex: 1,
          }}
        >
          <SignUpPageForm
            setEmail={setEmail}
            setPassword={setPassword}
            SignUpUser={SignUpUserandLogin}
            setUsername={setUsername}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Redirect href="/home" />
  );
};

export default SignUp;
//   const [fontLoaded] = useFonts({
//         virgilRegular : require('../assets/fonts/VirgilRegular.ttf')
//     })

//     // caching the layout view
//     const handleOnLayoutRootView = useCallback( async () =>{
//         if(fontLoaded){
//             await SplashScreen.hideAsync();
//         }
//     }, [fontLoaded])

//     if(!fontLoaded);
//     return <Stack onLayout={handleOnLayoutRootView} />
