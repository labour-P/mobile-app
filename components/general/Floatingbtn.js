import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

const FloatingBtn = ({ navigation }) => {
  return (
    <View style={styles.floatDiv}>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreatePostScreen")}
        style={styles.float}
      >
        <AntDesign name="pluscircle" size={55} color="#008325" />
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
