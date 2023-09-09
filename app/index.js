import { router } from "expo-router";
import { Redirect } from "expo-router";
import { React, useState } from "react";
import supabase from "../supabase";

const Page = () => {
  const [isUser, setisUser] = useState(null);
  async function doesUserExist() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      setisUser(true);
    } else setisUser(false);
  }
  doesUserExist();
  return isUser ? <Redirect href="/home" /> : <Redirect href="/signUp" />;
};

export default Page;
