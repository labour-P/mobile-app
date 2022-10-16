import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import BodyTextBold from "./BodyTextBold";

const PostButton = ({ postDataIsValid, handleSubmit, loading }) => {
  return (
    <TouchableOpacity
      disabled={postDataIsValid}
      onPress={handleSubmit}
      style={postDataIsValid ? styles.invalidBtn : styles.btn}
    >
      <BodyTextBold style={{ color: "white" }}>
        {loading ? <ActivityIndicator size="small" color="white" /> : "Post"}
      </BodyTextBold>
    </TouchableOpacity>
  );
};

export default PostButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#039951",
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 10,
    color: "#fff",
    fontSize: 15,
  },
  invalidBtn: {
    backgroundColor: "#039951",
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 10,
    color: "#fff",
    fontSize: 15,
    opacity: 0.5,
  },
});
