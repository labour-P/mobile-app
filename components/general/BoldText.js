import React from "react";
import { StyleSheet, Text } from "react-native";

const BoldText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default BoldText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "bold",
  },
});
