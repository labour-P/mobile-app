import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.view}>
      <Text>Profile Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={styles.float}
      >
        <AntDesign name="pluscircle" size={55} color="#008325" />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#fff",
    zIndex: -1,
  },
  float: {
    position: "absolute",
    bottom: -30,
    zIndex: 3,
  },
});