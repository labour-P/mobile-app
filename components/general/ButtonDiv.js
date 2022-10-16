import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ActivityIndicator,
} from "react-native";
import ErrorText from "./ErrorText";

const ButtonDiv = (props) => {
  let ButtonComponent = TouchableOpacity;

  return (
    <View style={styles.container}>
      {props?.error && (
        <ErrorText style={styles.error}>{props?.error}</ErrorText>
      )}
      <ButtonComponent
        onPress={props.onPress}
        style={{ ...styles.button, ...props.styles }}
      >
        {props.loading ? (
          <ActivityIndicator color={"#fff"} size="small" />
        ) : (
          <Text style={{ ...styles.text }}>{props.children}</Text>
        )}
      </ButtonComponent>
    </View>
  );
};

export default ButtonDiv;

const styles = StyleSheet.create({
  text: {
    fontFamily: "medium",
    fontSize: 15,
    color: "#fff",
  },
  button: {
    height: 49,
    width: "90%",
    borderRadius: 11,
    backgroundColor: "#008325",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -10,
  },
  error: {
    marginLeft: 20,
    marginBottom: 5,
  },
});
