import { Redirect } from "expo-router";
import { Pressable , Link } from "react-native";
import supabase from "../supabase";
import { React, useEffect, useState } from "react";
import { View, Text, SafeAreaView, TextInput, Button } from "react-native";
import { COLORS , FONTS , SIZES } from "../constants/theme";
import { ScrollView } from "react-native-gesture-handler";
import {Stack} from "expo-router";
import LoggedInForm from "../components/authentication/LoggedInForm";
// import styles from "../styles/search";

const login = () => {
    const [email, setEmail] = useState("");
    //   const [user, setUser] = useState({});
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedin] = useState(false);
  
    //   useEffect(() => {
    //     console.log("User is: ", user);
    //   }, [user]);
  
    async function signInWithEmail() {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: `${email}`,
        password: `${password}`,
      });
  
      if (error) {
        alert(error.message);
        return;
      } else {
        // console.log("data: ", data);
        setLoggedin(true);
        console.log(data);
      }
    }
    return(
       <SafeAreaView style={{flex:1 , backgroundColor:COLORS.mauve1}}>
           
                <Stack.Screen
                options={{
                    headerTitle:"",
                    headerStyle:{backgroundColor: COLORS.mauve1},
                    
                }}   
            /> 
            {!loggedIn ? (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    height:"100vh",
                    width:"100%",
                    flex:1,
                    padding:SIZES.medium ,
                }}>
                    <LoggedInForm 
                    setEmail={setEmail} 
                    setPassword={setPassword} 
                    signInWithEmail={signInWithEmail}/>
               
                    
                </View>
            </ScrollView>
            ):(
               
                <Redirect href="/home" />
            )

            }
        </SafeAreaView> 
    )
}





export default login;
