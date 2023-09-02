import React from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import styles from "./SignUpPageForm.style"
// import { Redirect } from "expo-router";
import { Link } from "expo-router";



const SignUpPageForm = ()=>{
    
   

    return(
        <View>
            <View style={styles.mainContainer}>
                <Text style={styles.headingTitle}
                >Welcome to ShareNotes.</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={{left:15}}>Enter your email</Text>
                <TextInput style={styles.SignUpemailInput}
                    placeholder="Username or Email"
                   
                    // onChangeText={onChangeText}
                    // value={text}
                />
                <Text style={{left:15}}>Password</Text>
                <TextInput
                    style={styles.passwordSignUpInput}
                    placeholder="Your password"
                    secureTextEntry={true}
                    // onChangeText={onChangeNumber}
                    // value={number}
                />

                <Pressable style={styles.signUpButton} ><Text style={{fontFamily:FONTS.regular , textAlign:"center" , fontSize:SIZES.large , bottom:5}}>SignUp</Text></Pressable>

                <View style={{display:"flex" , flexDirection:"row"}}>
                    <Text style={{marginTop:10, left: 50}}>Already have an account.</Text>
                    <Pressable style={{left:60 , top:10} }>
                            <Link href="/login" style={{color: COLORS.blue1 , textDecorationLine:"underline"}}>Login</Link>
                            </Pressable>
                </View>
            </View>
        </View>
        

   )
}


export default SignUpPageForm;