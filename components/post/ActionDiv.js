import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Share } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import CommentDiv from "./CommentDiv";
import { useSelector, useDispatch } from "react-redux";
import { currentDate, currentTime } from "../../utils/getDate";
import {
  getComment,
  getComments,
  getLikes,
  GET_COMMENTS,
  likePost,
} from "../../redux/actions/post";
import BodyTextLight from "../general/BodyTextLight";
import CommentSvg from "../../svg/CommentSvg";
import ShareSvg from "../../svg/Share";
import Like from "../../svg/Like";
import configs from "../../config/config";
import { NavigationContainer } from "@react-navigation/native";

const ActionDiv = ({ navigation, post, openComment }) => {
  const { user } = useSelector((state) => state.auth);
  const { likes } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const [error, setError] = useState({});
  const [comment, setcomment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLike = async (thread) => {
    const data = {
      userid: user._id,
      username: user.userName,
      name: user.name,
      profileurl: "",
      thread,
      location: user.ward,
      date: new Date(),
      time: currentTime,
    };
    console.log(thread);
    try {
      await dispatch(likePost(data));
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
    }
  };

  const handleComment = () => {
    if (openComment) {
      navigation.navigate("ViewPostScreen", { post: post });
    } else {
      return;
    }
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${configs.BASE_URL}/api/routes/posts/${thread}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <View style={styles.div}>
        <TouchableOpacity onPress={handleComment}>
          <CommentSvg />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLike(post.thread)}>
          <Like />
          <BodyTextLight>{likes?.length}</BodyTextLight>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onShare()}>
          <ShareSvg />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActionDiv;

const styles = StyleSheet.create({
  div: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingRight: 20,
    width: "80%",
  },
});
