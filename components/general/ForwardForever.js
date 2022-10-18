import React from "react";
import { View, StyleSheet } from "react-native";
import BodyTextBold from "./BodyTextBold";
import BodyTextLight from "./BodyTextLight";

const ForwardForever = () => {
  return (
    <View>
      <BodyTextLight
        style={{
          fontSize: 12,
          fontFamily: "medium",
          opacity: 0.8,
          textTransform: "uppercase",
        }}
      >
        Forward ever
      </BodyTextLight>
    </View>
  );
};

export default ForwardForever;
