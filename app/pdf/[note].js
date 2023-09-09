import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Constants } from "expo";
import { useLocalSearchParams } from "expo-router";
import PDFviewer from "../../components/pdf";

export default function notejs() {
  const { url } = useLocalSearchParams();
  return (
    <View>
      <PDFviewer url={url} />
    </View>
  );
}
