import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";

const ButtonDiv = (props) => {
  let ButtonComponent = TouchableOpacity;

  return (
    <View style={styles.container}>
      <ButtonComponent
        onPress={props.onPress}
        style={{ ...styles.button, ...props.styles }}
      >
        <Text style={{ ...styles.text }}>{props.children}</Text>
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
});
