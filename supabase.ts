import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";

import {SUPABASE_URL, SUPABASE_KEY} from "@env";
const ExpoSecureStoreAdapter = {
  
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key)
  },
}
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth : {
    persistSession: true,
    autoRefreshToken: true,
    storage: ExpoSecureStoreAdapter as any,
  }
});
export default supabase;