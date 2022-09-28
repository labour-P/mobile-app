import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View>
      <Image
        source={require("../../assets/img/logo.png")}
        style={styles.img}
        resizeMode={"contain"}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  img: {
    width: 120,
  },
});
