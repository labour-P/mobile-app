import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { colors } from "../../constants/color";

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
    fontSize: 14,
    color: colors.white,
  },
  button: {
    height: 49,
    width: "42%",
    borderRadius: 11,
    backgroundColor: colors.primaryBg,
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
