import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import BodyTextBold from "../general/BodyTextBold";
import { Dropdown } from "react-native-element-dropdown";
import ErrorText from "../general/ErrorText";

const SelectInput = (props) => {
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
      <BodyTextBold style={{ marginBottom: 5 }}>{props.title}</BodyTextBold>
      <Dropdown
        style={inputStyle}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={props.data}
        search
        inputSearchStyle={styles.inputSearchStyle}
        maxHeight={300}
        labelField="label"
        valueField="value"
        {...props}
      />
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </View>
  );
};

export default SelectInput;

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
    marginVertical: 3,
  },
  placeholderStyle: {
    color: "#848484",
    fontFamily: "normal",
    fontSize: 14,
  },
  iconStyle: {
    height: 30,
    width: 30,
    marginRight: 20,
  },
  selectedTextStyle: {
    fontFamily: "normal",
    fontSize: 14,
    color: "#000",
  },
  inputSearchStyle: {
    borderRadius: 10,
  },
});
