import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";

const ButtonSmall = (props) => {
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

export default ButtonSmall;

const styles = StyleSheet.create({
  text: {
    fontFamily: "bold",
    fontSize: 17,
    color: "#fff",
  },
  button: {
    height: 49,
    width: "42%",
    borderRadius: 11,
    backgroundColor: "#009245",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "flex-start",
    zIndex: -10,
    marginVertical: 5,
  },
});
