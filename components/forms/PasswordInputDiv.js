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
import { colors } from "../../constants/color";

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
          selectionColor={colors.primaryBg}
          autoCorrect={false}
          autoCapitalize="none"
          importantForAutofill={"no"}
          secureTextEntry={!visible ? true : false}
          {...props}
        />
        {visible ? (
          <TouchableOpacity onPress={handleVisble}>
            <Entypo
              style={styles.icon}
              name="eye"
              size={24}
              color={colors.black}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleVisble}>
            <Entypo
              style={styles.icon}
              name="eye-with-line"
              size={24}
              color={colors.primaryBg}
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
    color: "#fff",
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
