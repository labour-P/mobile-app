import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import BodyTextBold from "../general/BodyTextBold";
import ButtonSmall from "../general/ButtonSmall";
import SupportSvg from "../../svg/SupportSvg";
import Fund from "../../svg/Fund";
import ButtonSmallBorder from "../general/ButtonSmallBorder";
import { colors } from "../../constants/color";

const Support = ({ navigation }) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 30,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 0.5 }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primaryBg,
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            height: 55,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("SupportScreen")}
        >
          <BodyTextBold style={{ color: colors.white, marginRight: 10 }}>
            Donate
          </BodyTextBold>
          <Fund />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5, alignItems: "flex-end" }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            height: 55,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.greenText,
          }}
          onPress={() => navigation.navigate("ContributeScreen")}
        >
          <BodyTextBold style={{ color: colors.greenText, marginRight: 10 }}>
            Support
          </BodyTextBold>
          <SupportSvg />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({});
