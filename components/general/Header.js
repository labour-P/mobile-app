import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/color";
import HeadingText from "./HeadingText";

const Header = ({ navigation, text }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 20,
        // paddingVertical: 20,
        paddingTop: 25,
        paddingBottom: 10,
        borderBottomColor: colors.primaryGray,
        borderBottomWidth: 1,
        backgroundColor: colors.white,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color={colors.black} />
      </TouchableOpacity>
      <View>
        <HeadingText style={{ paddingLeft: 15, marginTop: -5 }}>
          {text}
        </HeadingText>
      </View>
    </View>
  );
};

export default Header;
