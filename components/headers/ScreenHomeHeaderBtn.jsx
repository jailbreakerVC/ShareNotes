import React from "react";
import { Image , TouchableOpacity , Pressable } from "react-native";
import styles from "./ScreenHomeheader.style";


const handlePress = () => {
        console.log("this function is working");
    }


const ScreenHomeHeaderBtn = ({iconUrl , dimensions}) => {
   return (
            <Pressable style={styles.btnContainer} onPress={handlePress}>
                <Image 
                    source={iconUrl} 
                    resizeMode="cover"
                    style = {styles.btnImg(dimensions)}
                />
            </Pressable>
    )
};

export default ScreenHomeHeaderBtn;