import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import BoldText from "../general/BoldText";
import BodyTextLight from "../general/BodyTextLight";
import { truncate } from "../../utils/truncateText";
import { colors } from "../../constants/color";

const AdminPostList = ({ navigation, post }) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 5,
        flexDirection: "row",
        paddingVertical: 15,
        alignItems: "center",
        width: "100%",
        borderBottomColor: colors.primaryGray,
        borderBottomWidth: 1,
      }}
      onPress={() => navigation.navigate("ViewAdminPostScreen", { post: post })}
    >
      <View style={{ flex: 0.15 }}>
        <Image
          source={post.img}
          style={{ width: 50, height: 40, borderRadius: 100 }}
        />
      </View>
      <View style={{ flex: 0.85 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <BoldText>{truncate(post.heading, 20)}</BoldText>
          <BodyTextLight style={{ fontSize: 10, opacity: 0.8 }}>
            {post.date}
          </BodyTextLight>
        </View>
        <BodyTextLight style={{ fontSize: 14 }}>
          {truncate(post.message, 80)}
        </BodyTextLight>
      </View>
    </TouchableOpacity>
  );
};

export default AdminPostList;
