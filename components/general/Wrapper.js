import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { colors } from "../../constants/color";

const Wrapper = (props) => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>{props.children}</ScrollView>
    </SafeAreaView>
  );
};

export default Wrapper;
