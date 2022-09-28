import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyTextLight = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default BodyTextLight;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: "medium",
  },
});
