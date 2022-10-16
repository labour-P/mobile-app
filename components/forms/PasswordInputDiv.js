import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BodyTextBold from "../general/BodyTextBold";
import { Entypo } from "@expo/vector-icons";
import ErrorText from "../general/ErrorText";

const PasswordInputDiv = (props) => {
  const [inputStyle, setInputStyle] = useState({});
  const [visible, setVisible] = useState(false);

  const handleVisble = () => {
    setVisible(!visible);
  };

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
      <View style={styles.inputDiv}>
        <TextInput
          style={inputStyle}
          selectionColor={"#008325"}
          autoCorrect={false}
          autoCapitalize="none"
          importantForAutofill={"no"}
          secureTextEntry={!visible ? true : false}
          {...props}
        />
        {visible ? (
          <TouchableOpacity onPress={handleVisble}>
            <Entypo style={styles.icon} name="eye" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleVisble}>
            <Entypo
              style={styles.icon}
              name="eye-with-line"
              size={24}
              color="#008325"
            />
          </TouchableOpacity>
        )}
      </View>
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </View>
  );
};

export default PasswordInputDiv;

const styles = StyleSheet.create({
  input: {
    color: "#fff",
    width: Dimensions.get("window").width - 30,
    height: 49,
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
    height: 49,
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
    height: 49,
    fontSize: 16,
    fontFamily: "medium",
    borderColor: "#008325",
    borderWidth: 1,
    borderRadius: 11,
    paddingLeft: 15,
    color: "#000",
  },
  div: {
    marginVertical: 5,
  },
  inputDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // height: 60,
  },
  icon: {
    marginLeft: -40,
  },
});
