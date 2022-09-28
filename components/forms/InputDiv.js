import React, { useEffect, useState } from "react";
import { TextInput, View, StyleSheet, Dimensions } from "react-native";
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
    <View style={styles.div}>
      {/* <BodyTextBold style={{ marginBottom: 5 }}>{props.title}</BodyTextBold> */}
      <TextInput
        style={inputStyle}
        selectionColor={"#008325"}
        autoCorrect={false}
        autoCapitalize="none"
        importantForAutofill={"no"}
        {...props}
      />
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </View>
  );
};

export default InputDiv;

const styles = StyleSheet.create({
  input: {
    color: "#fff",
    width: Dimensions.get("window").width - 30,
    height: 60,
    fontSize: 16,
    fontFamily: "medium",
    borderColor: "#c5c6cc",
    borderWidth: 1,
    borderRadius: 11,
    paddingLeft: 15,
    color: "#000",
  },
  err: {
    color: "#fff",
    width: Dimensions.get("window").width - 30,
    height: 60,
    fontSize: 16,
    fontFamily: "medium",
    borderColor: "#d63e39",
    borderWidth: 1,
    borderRadius: 11,
    paddingLeft: 15,
    color: "#000",
  },
  edit: {
    color: "#fff",
    width: Dimensions.get("window").width - 30,
    height: 60,
    fontSize: 16,
    fontFamily: "medium",
    borderColor: "#008325",
    borderWidth: 1,
    borderRadius: 11,
    paddingLeft: 15,
    color: "#000",
  },
  div: {
    marginVertical: 8,
  },
});
