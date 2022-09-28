import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyTextBold = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default BodyTextBold;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: "bold",
  },
});
