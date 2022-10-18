import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/color";

const BodyTextLight = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default BodyTextLight;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "medium",
    color: colors.darkText,
  },
});
