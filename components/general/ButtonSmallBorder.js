import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";

const ButtonSmallBorder = (props) => {
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

export default ButtonSmallBorder;

const styles = StyleSheet.create({
  text: {
    fontFamily: "bold",
    fontSize: 17,
    color: "#009245",
  },
  button: {
    height: 49,
    width: "42%",
    borderRadius: 11,
    backgroundColor: "#fff",
    borderColor: "#009245",
    borderWidth: 1,
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
