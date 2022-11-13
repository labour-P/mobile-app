import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
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
import { generateId } from "../../utils/generateRandomString";

const CommentDiv = ({ loadComments, loadingState }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [postComments, setPostComments] = useState([]);

  const { user } = useSelector((state) => state.auth);
  const { comments } = useSelector((state) => state.post);

  useEffect(() => {
    const sortComments = comments?.sort((a, b) => b.date.localeCompare(a.date));

    setPostComments(sortComments);
  }, [comments]);

  const userInitials = getInitials(user.name);

  if (loadComments) {
    return (
      <View style={{ marginVertical: 10 }}>
        <BodyTextLight
          style={{ opacity: 0.5, textAlign: "center", fontSize: 13 }}
        >
          <ActivityIndicator size="small" color={colors.greenText} />
        </BodyTextLight>
      </View>
    );
  }

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
        {postComments?.length > 0 ? (
          postComments.map((comment) => (
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 10,
              }}
              key={generateId()}
            >
              <View style={styles.profileImgDiv}>
                <Image
                  source={{ uri: comment.profileUrl }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                  }}
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
                  <BoldText
                    style={{ textTransform: "capitalize", fontSize: 14 }}
                  >
                    {comment?.name}
                  </BoldText>

                  <BodyTextLight style={{ fontSize: 12, opacity: 0.5 }}>
                    {timeSince(comment?.date)}
                  </BodyTextLight>
                </View>
                <View style={{ paddingVertical: 10, justifyContent: "center" }}>
                  <BodyTextLight
                    style={{ fontSize: 17, opacity: 0.8, paddingHorizontal: 5 }}
                  >
                    {comment.message}
                  </BodyTextLight>
                </View>
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
    </View>
  );
};

export default CommentDiv;

const styles = StyleSheet.create({
  profileImgDiv: {
    paddingLeft: 5,
  },
});
