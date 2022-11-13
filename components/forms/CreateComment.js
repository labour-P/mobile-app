import React, { useState, useEffect } from "react";
import { View } from "react-native";
import PostButton from "../general/PostButton";
import CommentInput from "./CommentInput";
import { useSelector, useDispatch } from "react-redux";
import { currentTime } from "../../utils/getDate";
import { colors } from "../../constants/color";
import { getComment, makeComment } from "../../Screens/Post/getdata";
import { GET_COMMENTS } from "../../redux/actions/post";

const CreateComment = ({ madeComment, setMadeComment, thread }) => {
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
      profileUrl: user.profileUrl,
      thread,
      location: `${user.state} - ${user.lga}`,
      date: new Date(),
      time: currentTime,
      message: comment,
    };

    setLoading(true);
    try {
      const res = await makeComment(data);
      setComment("");
      setMadeComment(!madeComment);
      // dispatch({ type: GET_COMMENTS, payload: res });
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
      <View style={{ flex: 0.75 }}>
        <CommentInput
          value={comment}
          onChangeText={setComment}
          placeholder={"post your reply"}
          error={error.comment}
        />
      </View>
      <View style={{ flex: 0.25 }}>
        <PostButton
          loading={loading}
          handleSubmit={handleComment}
          postDataIsValid={postDataIsValid}
        />
      </View>
    </View>
  );
};

export default CreateComment;
