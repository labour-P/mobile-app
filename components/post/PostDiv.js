import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import BodyTextLight from "../general/BodyTextLight";
import BoldText from "../general/BoldText";
import { useSelector, useDispatch } from "react-redux";
import ActionDiv from "./ActionDiv";
import CommentDiv from "./CommentDiv";
import ProfileInitials from "../general/ProfileInitials";
import { getInitials } from "../../utils/getInitials";
import { truncate } from "../../utils/truncateText";
import LinkText from "../general/LinkText";
import { timeSince } from "../../utils/timeAgo";
import { currentDate } from "../../utils/getDate";
import configs from "../../config/config";
import { getLikes } from "../../redux/actions/post";
import PostContainer from "./PostContainer";
import { colors } from "../../constants/color";

const PostDiv = ({ navigation, openComment }) => {
  const { posts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const [trends, setTrends] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    let newTrends = posts?.sort((a, b) => b.date.localeCompare(a.date));

    setTrends(newTrends);
  }, [posts]);
  // const [divId, setDivId] = useState(null);

  return (
    <View>
      {trends?.length ? (
        trends?.map((post, index) => {
          const userInitials = getInitials(post.name);
          return (
            <TouchableOpacity
              style={{
                borderBottomColor: colors.primaryGray,
                borderBottomWidth: 1,
                flexDirection: "column",
                paddingTop: 15,
              }}
              key={index}
              onPress={() => navigation.navigate("ViewPostScreen", { post })}
            >
              <PostContainer
                post={post}
                navigation={navigation}
                openComment={openComment}
                viewPost={false}
              />
            </TouchableOpacity>
          );
        })
      ) : (
        <View>
          <BodyTextLight>no post yet!</BodyTextLight>
        </View>
      )}
    </View>
  );
};

export default PostDiv;

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
