import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { colors } from "../../constants/color";

const FloatingBtn = ({ navigation }) => {
  return (
    <View style={styles.floatDiv}>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreatePostScreen")}
        style={styles.float}
      >
        <AntDesign name="pluscircle" size={55} color={colors.primaryBg} />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingBtn;

const styles = StyleSheet.create({
  float: {
    position: "absolute",
    bottom: -25,
    zIndex: 3,
  },
  floatDiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
