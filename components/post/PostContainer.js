import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { timeSince } from "../../utils/timeAgo";
import BodyTextLight from "../general/BodyTextLight";
import LinkText from "../general/LinkText";
import ProfileInitials from "../general/ProfileInitials";
import ActionDiv from "./ActionDiv";
import { useSelector } from "react-redux";
import { getInitials } from "../../utils/getInitials";
import BoldText from "../general/BoldText";
import { truncate } from "../../utils/truncateText";

const PostContainer = ({ post, navigation, openComment, viewPost }) => {
  const userInitials = getInitials(post?.name);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={styles.profileImgDiv}>
          <ProfileInitials
            userInitials={userInitials}
            size={40}
            fontSize={14}
          />
        </View>
        <View style={{ flex: 0.8, marginLeft: -25, marginTop: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: 10,
            }}
          >
            <BoldText style={{ textTransform: "capitalize", fontSize: 14 }}>
              {post?.name}
            </BoldText>

            <BodyTextLight style={{ fontSize: 12, opacity: 0.5 }}>
              {timeSince(post?.date)}
            </BodyTextLight>
          </View>
          <View style={{ paddingVertical: 10, justifyContent: "center" }}>
            <BodyTextLight
              style={{ fontSize: 17, opacity: 0.8, paddingHorizontal: 5 }}
            >
              {!viewPost ? truncate(post.message, 184) : post.message}
            </BodyTextLight>
          </View>
          {post.imageUrl?.length > 0 ? (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {post.imageUrl.map((image, index) => {
                return (
                  <Image
                    key={index}
                    source={{
                      uri: image.uri,
                    }}
                    style={{
                      width: "48%",
                      height: 160,
                      margin: 1,
                    }}
                  />
                );
              })}
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <ActionDiv
          post={post}
          navigation={navigation}
          openComment={openComment}
        />
      </View>
    </View>
  );
};

export default PostContainer;

const styles = StyleSheet.create({
  profileImgDiv: {
    flex: 0.2,
    paddingLeft: 5,
  },
  profileImg: { width: "100%", height: "100%" },
  postImg: {
    width: 200,
    height: 200,
  },
});
