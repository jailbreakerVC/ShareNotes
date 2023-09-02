import { Slot, Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
 
SplashScreen.preventAutoHideAsync();

const Layout = () => { 
    const [fontLoaded] = useFonts({
        virgilRegular : require('../assets/fonts/VirgilRegular.ttf')
    })
   
    // caching the layout view
    const handleOnLayoutRootView = useCallback( async () =>{
        if(fontLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontLoaded])

    if(!fontLoaded) return <Slot />;
    return <Stack onLayout={handleOnLayoutRootView} />
}


export default Layout;
