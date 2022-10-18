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
          backgroundColor: "red",
          flexDirection: "row",
          paddingHorizontal: 5,
          alignItems: "center",
        }}
      >
        <BodyTextLight style={{ color: colors.white }}>
          {error.res}
        </BodyTextLight>
        <LinkText
          onPress={() => setError((errors) => ({ ...errors, res: "" }))}
        >
          <Ionicons name="close" size={30} color={colors.black} />
        </LinkText>
      </View>
    </View>
  );
};

export default ErrorDiv;
