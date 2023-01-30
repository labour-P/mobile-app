import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Share } from "react-native";
import { currentTime } from "../../utils/getDate";
import BodyTextLight from "../general/BodyTextLight";
import CommentSvg from "../../svg/CommentSvg";
import ShareSvg from "../../svg/Share";
import Like from "../../svg/Like";
import configs from "../../config/config";
import { colors } from "../../constants/color";
import { useSelector, useDispatch } from "react-redux";
import { GET_LIKES, likePost } from "../../redux/actions/post";
import { postData } from "../../utils/getData";

const ActionDiv = ({
  navigation,
  post,
  opeComment,
  setLikedPost,
  likedPost,
  comments,
  isView,
}) => {
  const { user } = useSelector((state) => state.auth);
  const { likes } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const [error, setError] = useState({});
  const [comment, setcomment] = useState("");
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const handleLike = async (thread) => {
    const data = {
      userid: user._id,
      username: user.userName,
      name: user.name,
      profileurl: "",
      thread,
      location: `${user.state} - ${user.lga}`,
      date: new Date(),
      time: currentTime,
    };
    setLoading(true);
    try {
      const res = await postData("/routes/rate", data);
      console.log(res);
      setLikedPost(!likedPost);
      dispatch({ type: GET_LIKES, payload: res });
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
    }
    setLoading(false);
  };

  const handleComment = () => {
    if (opeComment) {
      navigation.navigate("ViewPostScreen", { post: post });
    } else {
      return;
    }
  };

  const onShare = async (thread) => {
    try {
      const result = await Share.share({
        message: `exp://labourp://posts/${thread}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(result.activityType);
        } else {
          console.log("Link shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Link sharing dismissed");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 10,
        borderBottomColor: colors.primaryGray,
        borderBottomWidth: 1,
      }}
    >
      <View style={styles.div}>
        <TouchableOpacity style={styles.align} onPress={handleComment}>
          {post?.countComment > 0 ? (
            <CommentSvg color={colors.greenText} />
          ) : (
            <CommentSvg color={colors.darkText} />
          )}
          <BodyTextLight style={styles.count}>
            {isView ? comments?.length : post?.countComment}
          </BodyTextLight>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.align}
          onPress={() => handleLike(post.thread)}
        >
          {post?.countRate > 0 ? (
            <Like color={colors.greenText} />
          ) : (
            <Like color={colors.darkText} />
          )}
          <BodyTextLight style={styles.count}>{post?.countRate}</BodyTextLight>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onShare(post.thread)}>
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
    paddingBottom: 15,
  },
  align: {
    flexDirection: "row",
    alignItems: "center",
  },
  count: {
    paddingLeft: 7,
    color: colors.greenText,
    fontSize: 15,
  },
});
