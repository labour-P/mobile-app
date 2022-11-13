import React from "react";
import { View } from "react-native";
import BodyTextBold from "./BodyTextBold";
import { useSelector } from "react-redux";

const ProfileInitials = ({ userInitials, size, fontSize }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: "#555",
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BodyTextBold
        style={{
          fontSize: fontSize,
          fontFamily: "black",
          textTransform: "uppercase",
        }}
      >
        {userInitials}
      </BodyTextBold>
    </View>
  );
};

export default ProfileInitials;
