import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import LinkText from "../components/general/LinkText";
import BodyTextBold from "../components/general/BodyTextBold";
import BodyTextLight from "../components/general/BodyTextLight";
import ProfileInitials from "../components/general/ProfileInitials";
import { getInitials } from "../utils/getInitials";
import { colors } from "../constants/color";
import LocationSvg from "../svg/LocationSvg";
import MsgSvg from "../svg/MsgSvg";
import CallSvg from "../svg/CallSvg";
import { GET_POST } from "../redux/actions/post";
import Wrapper from "../components/general/Wrapper";
import BoldText from "../components/general/BoldText";
import ErrorDiv from "../utils/ErrorDiv";
import { generateId } from "../utils/generateRandomString";
import { getData } from "../utils/getData";
import configs from "../config/config";
import { getPosts } from "./Post/getdata";
import PostDiv from "../components/post/PostDiv";
import ActionDiv from "../components/post/ActionDiv";

const Profile = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const userInitials = getInitials(user.name);
  console.log(user);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${configs.BASE_URL}/api/routes/finduserposts/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userid: user._id }),
        }
      );
      const postRes = await response.json();

      const threads = postRes.data.map((res) => res.thread);

      const promises = threads.map((thread) => {
        return fetch(`${configs.BASE_URL}/api/routes/count`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ thread }),
        }).then((res) => res.json());
      });

      const countData = Promise.all(promises);

      countData
        .then((resp) => {
          // setLoading(true);
          let postArr = [];
          postRes.data.map((post) => {
            resp.map((res) => {
              if (res.thread === post.thread) {
                const response = { ...res, ...post };
                postArr.push(response);
                const myPostsArr = postArr?.filter(
                  (post) => post.username === user.userName
                );

                const sortedPost = myPostsArr?.sort((a, b) =>
                  b.date.localeCompare(a.date)
                );
                setMyPosts(sortedPost);
              }
            });
          });
        })
        .catch((err) => {
          throw new Error(err);
        });
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
    }
    setLoading(false);
  }, [dispatch, setLoading, setError]);

  useEffect(() => {
    const unSub = fetchPosts();

    return () => {
      unSub;
    };
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={colors.greenText} />
      </View>
    );
  }

  return (
    <Wrapper>
      {error.res && <ErrorDiv error={error} setError={setError} />}
      <View style={styles.div}>
        <View
          style={{
            borderBottomColor: colors.primaryGray,
            borderBottomWidth: 1,
            paddingHorizontal: 20,
            paddingBottom: 10,
          }}
        >
          <View style={styles.alignDiv}>
            <Image
              source={{ uri: user.profileUrl }}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />

            <LinkText
              onPress={() => navigation.navigate("EditProfileScreen")}
              style={styles.edit}
            >
              Edit Profile
            </LinkText>
          </View>
          <View>
            <BodyTextBold>{user.name}</BodyTextBold>
            <BodyTextLight style={{ opacity: 0.5 }}>
              @{user.userName}
            </BodyTextLight>
          </View>
          <View style={styles.options}>
            <View style={styles.flex}>
              <LocationSvg />
              <BodyTextBold style={styles.opacity}> {user.state}</BodyTextBold>
            </View>
            <View style={styles.flex}>
              <MsgSvg />
              <BodyTextBold style={styles.opacity}> {user.email}</BodyTextBold>
            </View>
            <View style={styles.flex}>
              <CallSvg />
              <BodyTextBold style={styles.opacity}> {user.phone}</BodyTextBold>
            </View>
          </View>
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          <BoldText>{myPosts?.length} </BoldText>
          <BodyTextLight>Posts</BodyTextLight>
        </View> */}
        <View style={styles.post}>
          {myPosts?.length === 0 ||
            (myPosts === undefined && (
              <View
                style={{
                  flex: 1,
                  backgroundColor: colors.white,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator size="large" color={colors.greenText} />
              </View>
            ))}
          {myPosts?.length ? (
            myPosts?.map((post) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ViewPostScreen", { post })}
                key={generateId()}
                style={{ width: "100%" }}
              >
                <PostDiv post={post} viewPost={false} />
                <ActionDiv
                  post={post}
                  navigation={navigation}
                  viewPost={false}
                />
              </TouchableOpacity>
            ))
          ) : (
            <View>
              <BodyTextLight>You dont have any post.</BodyTextLight>
            </View>
          )}
        </View>
      </View>
    </Wrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.white,
  },
  div: {
    // paddingHorizontal: 20,
    backgroundColor: colors.white,
    flex: 1,
  },
  alignDiv: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  edit: {
    borderColor: colors.greenText,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    color: colors.greenText,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  opacity: {
    opacity: 0.5,
    fontSize: 11,
  },
  post: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    // backgroundColor: "red",
  },
});
