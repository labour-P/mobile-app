import React, { useEffect, useState } from "react";
import { TextInput, View, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/color";
import BodyTextBold from "../general/BodyTextBold";
import ErrorText from "../general/ErrorText";

const InputDiv = (props) => {
  const [inputStyle, setInputStyle] = useState({});

  useEffect(() => {
    if (props.value) {
      setInputStyle({
        ...styles.edit,
      });
    }
  }, [props.value]);

  useEffect(() => {
    setInputStyle({
      ...styles.input,
    });
  }, []);

  useEffect(() => {
    const inputTimer = setTimeout(() => {
      if (props.error) {
        setInputStyle({
          ...styles.err,
        });
      } else {
        setInputStyle({
          ...styles.input,
        });
      }
    }, 1000);

    return () => clearTimeout(inputTimer);
  }, [props.value, props.error]);

  return (
    <View>
      <View style={styles.div}>
        {/* <BodyTextBold style={{ marginBottom: 5 }}>{props.title}</BodyTextBold> */}
        <TextInput
          style={inputStyle}
          selectionColor={colors.primaryBg}
          autoCorrect={false}
          autoCapitalize="none"
          importantForAutofill={"no"}
          {...props}
        />
      </View>
      {props.error && (
        <ErrorText style={{ paddingLeft: 20 }}>{props.error}</ErrorText>
      )}
    </View>
  );
};

export default InputDiv;

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get("window").width - 30,
    height: 49,
    fontSize: 16,
    fontFamily: "normal",
    borderColor: colors.primaryGray,
    borderWidth: 1,
    borderRadius: 11,
    paddingLeft: 15,
    color: colors.darkText,
  },
  err: {
    width: Dimensions.get("window").width - 30,
    height: 49,
    fontSize: 16,
    fontFamily: "normal",
    borderColor: colors.error,
    borderWidth: 1,
    borderRadius: 11,
    paddingLeft: 15,
    color: colors.darkText,
  },
  edit: {
    width: Dimensions.get("window").width - 30,
    height: 49,
    fontSize: 16,
    fontFamily: "normal",
    borderColor: colors.primaryBg,
    borderWidth: 1,
    borderRadius: 11,
    paddingLeft: 15,
    color: colors.darkText,
  },
  div: {
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
