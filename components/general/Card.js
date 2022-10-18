import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../constants/color";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: colors.darkText,
    shadowOffset: {
      width: 0.2,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
});
