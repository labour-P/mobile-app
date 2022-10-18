import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/color";

const ErrorText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    fontFamily: "bold",
    color: colors.error,
  },
});
