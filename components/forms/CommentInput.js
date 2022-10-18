import React from "react";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";
import { colors } from "../../constants/color";

const CommentInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      selectionColor={colors.primaryBg}
      autoCorrect={false}
      autoCapitalize="none"
      importantForAutofill={"no"}
      {...props}
    />
  );
};

export default CommentInput;

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get("window").width - 30,
    height: 50,
    fontSize: 16,
    fontFamily: "normal",
    paddingLeft: 15,
    color: colors.darkText,
  },
});
