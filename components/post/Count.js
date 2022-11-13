import React from "react";
import { View, StyleSheet } from "react-native";
import BodyTextBold from "../general/BodyTextBold";
import BodyTextLight from "../general/BodyTextLight";

const Count = ({ comments, likes }) => {
  return (
    <View
      style={{
        padding: 15,
        flexDirection: "row",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <BodyTextBold>{comments?.length ? comments?.length : 0}</BodyTextBold>
        <BodyTextLight style={{ opacity: 0.5, paddingLeft: 5 }}>
          Comments
        </BodyTextLight>
      </View>
      <View style={{ paddingLeft: 20, flexDirection: "row" }}>
        <BodyTextBold>{likes}</BodyTextBold>
        <BodyTextLight style={{ opacity: 0.5, paddingLeft: 5 }}>
          Likes
        </BodyTextLight>
      </View>
    </View>
  );
};

export default Count;
