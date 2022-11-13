import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BodyTextLight from "../components/general/BodyTextLight";
import LinkText from "../components/general/LinkText";
import { colors } from "../constants/color";

const ErrorDiv = ({ error, setError }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: colors.error,
          flexDirection: "row",
          paddingHorizontal: 10,
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 10,
          // height: 50,
        }}
      >
        <BodyTextLight style={{ color: colors.white, fontSize: 14 }}>
          {error.res}
        </BodyTextLight>
        <LinkText
          onPress={() => setError((errors) => ({ ...errors, res: "" }))}
        >
          <Ionicons name="close" size={23} color={colors.white} />
        </LinkText>
      </View>
    </View>
  );
};

export default ErrorDiv;
