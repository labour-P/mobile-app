import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import CommentDiv from "../../components/post/CommentDiv";
import CreateComment from "../../components/forms/CreateComment";
import { GET_COMMENTS } from "../../redux/actions/post";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../constants/color";
import configs from "../../config/config";
import ErrorDiv from "../../utils/ErrorDiv";
import Header from "../../components/general/Header";
import Count from "../../components/post/Count";
import PostDiv from "../../components/post/PostDiv";
import ActionDiv from "../../components/post/ActionDiv";

const ViewPost = ({ route, navigation }) => {
  const { post } = route.params;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [madeComment, setMadeComment] = useState(false);
  const [likedPost, setLikedPost] = useState(false);

  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.post);

  const fetchComment = useCallback(async () => {
    setLoading(true);

    try {
      const res = await fetch(`${configs.BASE_URL}/api/routes/viewcomments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          thread: post.thread,
        }),
      });

      const response = await res.json();

      dispatch({ type: GET_COMMENTS, payload: response });
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
    }
    setLoading(false);
  }, [madeComment, dispatch, setLoading, setError]);

  useEffect(() => {
    fetchComment();
  }, [madeComment]);

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      {error.res && <ErrorDiv error={error} setError={setError} />}
      <Header navigation={navigation} text="Post" />
      <ScrollView>
        <View
          style={{
            paddingTop: 5,
            backgroundColor: colors.white,
          }}
        >
          <PostDiv post={post} viewPost={false} />
          <ActionDiv
            likedPost={likedPost}
            setLikedPost={setLikedPost}
            post={post}
            navigation={navigation}
            viewPost={false}
            comments={comments}
            isView={true}
          />

          {!loading && <Count likes={post.countRate} comments={comments} />}

          <CommentDiv post={post} loadComments={loading} />
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
        <CreateComment
          madeComment={madeComment}
          setMadeComment={setMadeComment}
          thread={post.thread}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewPost;

const styles = StyleSheet.create({});
