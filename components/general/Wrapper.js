import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

const Wrapper = (props) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>{props.children}</ScrollView>
    </SafeAreaView>
  );
};

export default Wrapper;
