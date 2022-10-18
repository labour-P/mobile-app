import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../constants/color";

const HeadingText = (props) => {
  return (
    <View>
      <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
    </View>
  );
};

export default HeadingText;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "bold",
    color: colors.darkText,
  },
});
