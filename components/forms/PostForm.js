import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { colors } from "../../constants/color";

const PostForm = (props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        selectionColor={colors.primaryBg}
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
    fontFamily: "normal",
    textAlignVertical: "top",
  },
});
