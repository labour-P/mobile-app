import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import FloatingBtn from "../../components/general/Floatingbtn";
import PostDiv from "../../components/post/PostDiv";
import { useDispatch, useSelector } from "react-redux";
import { GET_POST } from "../../redux/actions/post";
import ErrorDiv from "../../utils/ErrorDiv";
import { colors } from "../../constants/color";
import { generateId } from "../../utils/generateRandomString";
import ActionDiv from "../../components/post/ActionDiv";
import configs from "../../config/config";
import LinkText from "../../components/general/LinkText";
import BodyTextLight from "../../components/general/BodyTextLight";

const Trends = ({ navigation }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [trends, setTrends] = useState([]);
  const [currentpage, setCurrentPage] = useState("1");
  const [likedPost, setLikedPost] = useState(false);

  const fetchPosts = async () => {
    console.log(`fetch - ${currentpage}`);
    setLoading(true);
    try {
      const response = await fetch(
        `${configs.BASE_URL}/api/routes/viewposts/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ page: currentpage }),
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
          let postArr = [];
          postRes.data.map((post) => {
            resp.map((res) => {
              if (res.thread === post.thread) {
                const response = { ...res, ...post };
                console.log(response);
                postArr.push(response);
                setTrends(postArr);
                dispatch({ type: GET_POST, payload: postArr });
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
  };

  const handleNextPage = () => {
    const newPageCount = parseInt(currentpage) + 1;
    setCurrentPage(newPageCount.toString());
  };

  const handlPrevPage = () => {
    const newPageCount = parseInt(currentpage) - 1;
    setCurrentPage(newPageCount.toString());
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    fetchPosts();
    setRefreshing(false);
  };

  useEffect(() => {
    console.log("running fetch effect");
    const unSub = fetchPosts();

    return () => unSub;
  }, [currentpage]);

  useEffect(() => {
    console.log("running like effect");
    setLoading(false);
    const unSub = fetchPosts();
    setLoading(false);
    return () => unSub;
  }, [likedPost]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.greenText} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.view}>
      {error.res && <ErrorDiv error={error} setError={setError} />}

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {trends?.length === 0 || trends === undefined ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color={colors.greenText} />
          </View>
        ) : (
          trends?.map((trend) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ViewPostScreen", { post: trend })
              }
              key={generateId()}
            >
              <PostDiv post={trend} viewPost={false} />
              <ActionDiv
                likedPost={likedPost}
                setLikedPost={setLikedPost}
                post={trend}
                navigation={navigation}
                viewPost={false}
                comments={""}
                isView={false}
              />
            </TouchableOpacity>
          ))
        )}
        <View>
          {currentpage === "1" && trends?.length !== 0 && (
            <LinkText onPress={handleNextPage} style={styles.seeMore}>
              Next Page
            </LinkText>
          )}
          {currentpage !== "1" && trends?.length !== 0 && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <LinkText onPress={handlPrevPage} style={styles.next}>
                Previous Page
              </LinkText>

              <LinkText onPress={handleNextPage} style={styles.next}>
                Next Page
              </LinkText>
            </View>
          )}
        </View>
      </ScrollView>
      {/* Floating button */}
      <FloatingBtn navigation={navigation} />
    </SafeAreaView>
  );
};

export default Trends;

const styles = StyleSheet.create({
  view: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    position: "relative",
    backgroundColor: colors.white,
    zIndex: -1,
    height: "100%",
  },
  float: {
    position: "absolute",
    bottom: -25,
    zIndex: 3,
  },
  floatDiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  mainView: {
    marginTop: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: Dimensions.get("window").height,
  },
  div: {
    flexDirection: "row",
    // borderBottomColor: colors.primaryGray,
    // borderBottomWidth: 1,

    marginTop: -5,
  },
  filterText: {
    fontSize: 16,
    textTransform: "capitalize",
  },
  selected: {
    borderBottomColor: colors.greenText,
    borderBottomWidth: 3,
    flexDirection: "row",
    width: "50%",
    justifyContent: "center",
    paddingVertical: 15,
  },
  unselected: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "center",
    paddingVertical: 15,
  },
  seeMore: {
    color: colors.primaryBg,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
    marginHorizontal: 20,
    textAlign: "center",
  },
  next: {
    color: colors.primaryBg,
    paddingVertical: 15,
    paddingHorizontal: 25,
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
