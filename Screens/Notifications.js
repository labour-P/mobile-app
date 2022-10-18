import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FloatingBtn from "../components/general/Floatingbtn";
import { Ionicons } from "@expo/vector-icons";
import BodyTextLight from "../components/general/BodyTextLight";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/color";

const Notifications = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.div}>
      <View style={styles.view}>
        <Ionicons
          name="ios-notifications-outline"
          size={100}
          color={colors.primaryGray}
        />
        <BodyTextLight style={{ textAlign: "center", fontSize: 16 }}>
          Personalized notifcations feed coming soon, stay tuned
        </BodyTextLight>

        {/* Floating btn */}
      </View>
      <FloatingBtn navigation={navigation} />
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  div: {
    flex: 1,
    backgroundColor: colors.white,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    zIndex: -1,
    paddingHorizontal: 20,
    width: "100%",
    height: "80%",
    // flex: 1,
  },
  float: {
    position: "absolute",
    bottom: -30,
    zIndex: 3,
  },
});
