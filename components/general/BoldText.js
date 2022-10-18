import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/color";

const BoldText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default BoldText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "bold",
    color: colors.darkText,
  },
});
