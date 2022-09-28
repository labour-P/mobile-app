import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const LinkText = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default LinkText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "medium",
  },
});
