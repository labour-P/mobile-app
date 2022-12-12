import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import BodyTextLight from "../general/BodyTextLight";
import { useSelector } from "react-redux";
import { getInitials } from "../../utils/getInitials";
import { colors } from "../../constants/color";
import { generateId } from "../../utils/generateRandomString";
import ProfileInitials from "../general/ProfileInitials";
import BoldText from "../general/BoldText";
import { timeSince } from "../../utils/timeAgo";
import { truncate } from "../../utils/truncateText";
import ImageDiv from "./ImageDiv";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "../general/Modal";

const PostDiv = ({ post, viewPost }) => {
  const userInitials = getInitials(post?.name);
  const postTime = timeSince(post?.date);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 10,
        zIndex: -10,
      }}
    >
      {isModalOpen && (
        <Modal
          userid={post.userid}
          postid={post._id}
          username={post.name}
          modalVisible={isModalOpen}
          setModalVisible={setIsModalOpen}
        />
      )}
      <View style={styles.profileImgDiv}>
        <Image
          source={{ uri: post.profileUrl }}
          style={{ width: 50, height: 50, borderRadius: 100 }}
        />
      </View>
      <View style={{ flex: 0.9, marginLeft: 20, marginTop: 5 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: 10,
            }}
          >
            <BoldText style={{ textTransform: "capitalize", fontSize: 13 }}>
              {post?.name}
            </BoldText>

            <BodyTextLight
              style={{ fontSize: 13, opacity: 0.5, paddingLeft: 5 }}
            >
              {postTime}
            </BodyTextLight>
          </View>
          <TouchableOpacity onPress={handleModal} paddingRight={20}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={22}
              color="black"
              p={20}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 10, justifyContent: "center" }}>
          <BodyTextLight
            style={{ fontSize: 17, opacity: 0.8, paddingHorizontal: 5 }}
          >
            {!viewPost ? truncate(post.message, 184) : post.message}
          </BodyTextLight>
        </View>
        {post?.imageurl[0] !== null ? (
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <ImageDiv img={post.imageurl} />
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

export default PostDiv;

const styles = StyleSheet.create({
  profileImgDiv: {
    flex: 0.1,
    paddingLeft: 5,
  },
  profileImg: { width: "100%", height: "100%" },
  postImg: {
    width: 200,
    height: 200,
  },
});
