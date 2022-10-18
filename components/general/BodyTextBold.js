import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/color";

const BodyTextBold = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default BodyTextBold;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "bold",
    color: colors.darkText,
  },
});
