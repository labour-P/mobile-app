import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { makeComment } from "../../redux/actions/post";
import PostButton from "../general/PostButton";
import CommentInput from "./CommentInput";
import { useSelector, useDispatch } from "react-redux";
import { currentTime } from "../../utils/getDate";
import { colors } from "../../constants/color";

const CreateComment = ({ post }) => {
  const [postDataIsValid, setPostDataIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [error, setError] = useState({});

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (comment.length) {
      setPostDataIsValid(false);
    } else {
      setPostDataIsValid(true);
    }
  }, [comment]);

  const handleComment = async () => {
    const data = {
      userid: user._id,
      username: user.userName,
      name: user.name,
      profileurl: "",
      thread: post.thread,
      location: user.ward,
      date: new Date(),
      time: currentTime,
    };
    setLoading(true);
    try {
      await dispatch(makeComment(data));
      setComment("");
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
    }
    setLoading(false);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        paddingVertical: 10,
        marginTop: 10,
      }}
    >
      <CommentInput
        value={comment}
        onChangeText={setComment}
        placeholder={"post your reply"}
        error={error.comment}
      />
      <PostButton
        loading={loading}
        handleSubmit={handleComment}
        postDataIsValid={postDataIsValid}
      />
    </View>
  );
};

export default CreateComment;
