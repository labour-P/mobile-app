import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const PostForm = (props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        selectionColor={"#008325"}
        autoCorrect={false}
        autoCapitalize="none"
        importantForAutofill={"no"}
        keyboardType="default"
        {...props}
      />
    </View>
  );
};

export default PostForm;

const styles = StyleSheet.create({
  input: {
    height: "100%",
    marginTop: 10,
    fontSize: 17,
    fontFamily: "medium",
    textAlignVertical: "top",
  },
});
