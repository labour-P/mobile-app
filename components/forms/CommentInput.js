import React from "react";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";

const CommentInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      selectionColor={"#008325"}
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
    input: {
      color: "#fff",
      width: Dimensions.get("window").width - 30,
      height: 50,
      fontSize: 16,
      fontFamily: "medium",
      paddingLeft: 15,
      color: "#000",
    },
  },
});
