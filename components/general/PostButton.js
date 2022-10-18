import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../constants/color";
import BodyTextBold from "./BodyTextBold";

const PostButton = ({ postDataIsValid, handleSubmit, loading }) => {
  return (
    <TouchableOpacity
      disabled={postDataIsValid}
      onPress={handleSubmit}
      style={postDataIsValid ? styles.invalidBtn : styles.btn}
    >
      <BodyTextBold style={{ color: colors.white }}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          "Post"
        )}
      </BodyTextBold>
    </TouchableOpacity>
  );
};

export default PostButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primaryBg,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 10,
    color: colors.white,
    fontSize: 15,
  },
  invalidBtn: {
    backgroundColor: "#039951",
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 10,
    color: colors.white,
    fontSize: 15,
    opacity: 0.5,
  },
});
