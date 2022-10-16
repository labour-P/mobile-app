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

const ActionDiv = ({ setOpenComment, openComment, thread }) => {
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
      await dispatch(getLikes(data));
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
    }
  };

  const handleComment = async (thread) => {
    if (openComment === thread) {
      setOpenComment("");
    } else {
      setOpenComment(thread);
      setLoading(true);
      console.log(thread);
      dispatch({ type: GET_COMMENTS, payload: [] });
      try {
        const res = await getComments(thread);

        dispatch({ type: GET_COMMENTS, payload: res });
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
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
    <View>
      <View style={styles.div}>
        <TouchableOpacity onPress={() => handleComment(thread)}>
          <CommentSvg />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLike(thread)}>
          <Like />
          <BodyTextLight>{likes?.length}</BodyTextLight>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onShare()}>
          <ShareSvg />
        </TouchableOpacity>
      </View>
      <View>
        {openComment === thread && (
          <CommentDiv loadComments={loading} thread={thread} />
        )}
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
  },
});
