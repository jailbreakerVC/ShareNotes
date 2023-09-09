import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Constants } from "expo";
import { useLocalSearchParams } from "expo-router";
import PDFviewer from "../../components/pdf";
import { Linking } from "react-native";

export default function notejs() {
  // const { note } = useLocalSearchParams();
  const { url } = useLocalSearchParams();
  return Linking.openURL(url).catch((err) => {
    console.log(err);
  });
}
