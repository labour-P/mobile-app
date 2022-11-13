import React from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { colors } from "../../constants/color";

const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color={colors.greenText} />
    </View>
  );
};

export default LoadingScreen;
