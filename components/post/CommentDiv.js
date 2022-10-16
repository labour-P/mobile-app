import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import CommentInput from "../forms/CommentInput";
import PostButton from "../general/PostButton";
import { useDispatch, useSelector } from "react-redux";
import { makeComment } from "../../redux/actions/post";
import { currentDate, currentTime } from "../../utils/getDate";
import BodyTextLight from "../general/BodyTextLight";
import ProfileInitials from "../general/ProfileInitials";
import { getInitials } from "../../utils/getInitials";
import BoldText from "../general/BoldText";
import { timeSince } from "../../utils/timeAgo";

const CommentDiv = ({ postId, thread, loadComments }) => {
  const [comment, setComment] = useState("");
  const [postDataIsValid, setPostDataIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [postComments, setPostComments] = useState([]);

  const { user } = useSelector((state) => state.auth);
  const { comments } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    const sortComments = comments.sort((a, b) => b.date.localeCompare(a.date));

    setPostComments(sortComments);
  }, [comments]);

  const userInitials = getInitials(user.name);

  const handleComment = async () => {
    console.log(postId);
    setLoading(true);
    const data = {
      userid: user._id,
      postId,
      username: user.userName,
      name: user.name,
      profileurl: "",
      thread,
      location: user.ward,
      date: new Date(),
      time: currentTime,
      message: comment,
      imageurl: "",
      videourl: "",
    };

    try {
      await dispatch(makeComment(data));
      setComment("");
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
    }

    setLoading(false);
  };

  useEffect(() => {
    if (comment.length) {
      setPostDataIsValid(false);
    } else {
      setPostDataIsValid(true);
    }
  }, [comment]);

  return (
    <View
      style={{
        marginTop: 10,
        borderLeftColor: "#ccc",
        // borderLeftWidth: 1,
        paddingLeft: 0,
        borderTopColor: "#ccc",
        borderTopWidth: 1,
        width: Dimensions.get("window").width,
        paddingVertical: 15,
      }}
    >
      <View>
        {loadComments && (
          <View style={{ marginVertical: 10 }}>
            <BodyTextLight
              style={{ opacity: 0.5, textAlign: "center", fontSize: 13 }}
            >
              Loading comments...
            </BodyTextLight>
          </View>
        )}
        <View style={{ borderLeftWidth: 1, borderLeftColor: "#ccc" }}>
          {postComments?.length > 0 ? (
            postComments.map((comment) => (
              <View
                key={comment._id}
                style={{
                  borderBottomColor: "#ccc",
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  paddingVertical: 5,
                }}
              >
                <View
                  style={{
                    justifyContent: "space-between",
                    marginTop: 10,
                    flexDirection: "row",
                    paddingRight: 80,
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ProfileInitials
                      userInitials={userInitials}
                      size={40}
                      fontSize={13}
                    />
                    <BoldText
                      style={{
                        textTransform: "capitalize",
                        fontSize: 12,
                        marginLeft: 10,
                      }}
                    >
                      {comment.name}
                    </BoldText>
                  </View>
                  <View style={{}}>
                    <BodyTextLight style={{ fontSize: 12, opacity: 0.5 }}>
                      {timeSince(comment.date)}
                    </BodyTextLight>
                  </View>
                </View>

                <View
                  style={{
                    paddingVertical: 5,
                    justifyContent: "center",
                    paddingLeft: 50,
                  }}
                >
                  <BodyTextLight>{comment.message}</BodyTextLight>
                </View>
              </View>
            ))
          ) : (
            <View style={{ marginVertical: 10 }}>
              <BodyTextLight
                style={{ opacity: 0.5, textAlign: "center", fontSize: 13 }}
              >
                No comments yet...
              </BodyTextLight>
            </View>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            marginLeft: -65,
            backgroundColor: "#fff",
            height: 40,
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
      </View>
    </View>
  );
};

export default CommentDiv;

const styles = StyleSheet.create({});
