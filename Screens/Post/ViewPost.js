import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Wrapper from "../../components/general/Wrapper";
import PostContainer from "../../components/post/PostContainer";
import { AntDesign } from "@expo/vector-icons";
import BodyTextLight from "../../components/general/BodyTextLight";
import HeadingText from "../../components/general/HeadingText";
import CommentDiv from "../../components/post/CommentDiv";
import CreateComment from "../../components/forms/CreateComment";
import {
  getComments,
  getLikes,
  GET_COMMENTS,
  GET_LIKES,
} from "../../redux/actions/post";
import { useDispatch, useSelector } from "react-redux";
import BodyTextBold from "../../components/general/BodyTextBold";
import { colors } from "../../constants/color";

const ViewPost = ({ route, navigation }) => {
  const { post } = route.params;

  const [loadingLikesAndComments, setLoadingLikesAndComments] = useState(false);
  const [error, setError] = useState({});

  const dispatch = useDispatch();
  const { likes, comments } = useSelector((state) => state.post);

  const fetchLikeAndComments = async () => {
    setLoadingLikesAndComments(true);

    try {
      const likes = await dispatch(getLikes(post.thread));
      const comments = await dispatch(getComments(post.thread));
      dispatch({ type: GET_COMMENTS, payload: comments });
      dispatch({ type: GET_LIKES, payload: likes });
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
    }
  };

  useEffect(() => {
    fetchLikeAndComments();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderBottomColor: colors.primaryGray,
          borderBottomWidth: 1,
          backgroundColor: colors.white,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={25} color={colors.black} />
        </TouchableOpacity>
        <View>
          <HeadingText style={{ paddingLeft: 15 }}>Post</HeadingText>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            paddingTop: 20,
            height: Dimensions.get("window").height - 150,
            backgroundColor: colors.white,
          }}
        >
          <View
            style={{
              borderBottomColor: colors.primaryGray,
              borderBottomWidth: 1,
            }}
          >
            <PostContainer viewPost={true} post={post} openComment={false} />
          </View>
          <View
            style={{
              padding: 15,
              flexDirection: "row",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <BodyTextBold>
                {comments?.length ? comments.length : 0}
              </BodyTextBold>
              <BodyTextLight style={{ opacity: 0.5, paddingLeft: 5 }}>
                Comments
              </BodyTextLight>
            </View>
            <View style={{ paddingLeft: 20, flexDirection: "row" }}>
              <BodyTextBold>{likes?.length ? likes.length : 0}</BodyTextBold>
              <BodyTextLight style={{ opacity: 0.5, paddingLeft: 5 }}>
                Likes
              </BodyTextLight>
            </View>
          </View>
          <View>
            <CommentDiv post={post} />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: colors.white,
          borderTopColor: colors.primaryGray,
          borderWidth: 1,
          paddingBottom: 20,
        }}
      >
        <CreateComment post={post} />
      </View>
    </SafeAreaView>
  );
};

export default ViewPost;

const styles = StyleSheet.create({});
