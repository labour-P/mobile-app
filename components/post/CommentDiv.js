import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import CommentInput from "../forms/CommentInput";
import PostButton from "../general/PostButton";
import { useDispatch, useSelector } from "react-redux";
import {
  getComments,
  GET_COMMENTS,
  makeComment,
} from "../../redux/actions/post";
import { currentDate, currentTime } from "../../utils/getDate";
import BodyTextLight from "../general/BodyTextLight";
import ProfileInitials from "../general/ProfileInitials";
import { getInitials } from "../../utils/getInitials";
import BoldText from "../general/BoldText";
import { timeSince } from "../../utils/timeAgo";
import CreateComment from "../forms/CreateComment";
import { colors } from "../../constants/color";

const CommentDiv = ({ post, loadComments }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [postComments, setPostComments] = useState([]);

  const { user } = useSelector((state) => state.auth);
  const { comments } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const fetchComments = async () => {
    setLoading(true);

    dispatch({ type: GET_COMMENTS, payload: [] });
    try {
      const res = await getComments(post.thread);
      dispatch({ type: GET_COMMENTS, payload: res });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    const sortComments = comments?.sort((a, b) => b.date.localeCompare(a.date));

    setPostComments(sortComments);
  }, [comments]);

  const userInitials = getInitials(user.name);

  return (
    <View
      style={{
        marginTop: 30,
        borderLeftColor: colors.primaryGray,
        paddingLeft: 0,
        width: Dimensions.get("window").width,
        paddingVertical: 0,
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
        <View>
          {postComments?.length > 0 ? (
            postComments.map((comment) => (
              <View
                key={comment._id}
                style={{
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
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 0.1,
                      marginTop: 15,
                    }}
                  >
                    <ProfileInitials
                      userInitials={userInitials}
                      size={40}
                      fontSize={13}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 0.9,
                      justifyContent: "space-between",
                      paddingHorizontal: 10,
                    }}
                  >
                    <BoldText
                      style={{
                        textTransform: "capitalize",
                        fontSize: 14,
                        marginLeft: 10,
                      }}
                    >
                      {comment.name}
                    </BoldText>
                    <BodyTextLight style={{ fontSize: 12, opacity: 0.5 }}>
                      {timeSince(comment.date)}
                    </BodyTextLight>
                  </View>
                </View>

                <View
                  style={{
                    paddingVertical: 5,
                    justifyContent: "center",
                    paddingLeft: 55,
                    opacity: 0.8,
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
        {/* <CreateComment thread={thread} /> */}
      </View>
    </View>
  );
};

export default CommentDiv;

const styles = StyleSheet.create({});
