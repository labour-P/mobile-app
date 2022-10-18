import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BodyTextBold from "../general/BodyTextBold";
import { EvilIcons } from "@expo/vector-icons";
import ErrorText from "../general/ErrorText";
import { colors } from "../../constants/color";

const SearchInput = (props) => {
  const [inputStyle, setInputStyle] = useState({});

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
      <View style={styles.inputDiv}>
        <TextInput
          style={inputStyle}
          selectionColor={colors.primaryBg}
          autoCorrect={false}
          autoCapitalize="none"
          importantForAutofill={"no"}
          keyboardType="web-search"
          {...props}
        />

        <TouchableOpacity>
          <EvilIcons
            style={styles.icon}
            name="search"
            size={35}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;

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
    color: "#fff",
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
    marginVertical: 8,
  },
  inputDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  icon: {
    marginLeft: -50,
  },
});
