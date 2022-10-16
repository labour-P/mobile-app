import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import Filter from "../../components/trends/Filter";
import FloatingBtn from "../../components/general/Floatingbtn";
import PostDiv from "../../components/post/PostDiv";
import { useDispatch } from "react-redux";
import { getPost } from "../../redux/actions/post";
import ErrorDiv from "../../utils/ErrorDiv";
import BodyTextLight from "../../components/general/BodyTextLight";

const Trends = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError((errors) => ({ ...errors, res: "" }));

    try {
      await dispatch(getPost());
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
    }
    setLoading(false);
  }, [dispatch, setLoading, setError]);

  console.log(loading);

  useEffect(() => {
    const willFocusSub = navigation.addListener("focus", fetchPosts);
    return () => {
      willFocusSub;
    };
  }, [fetchPosts]);

  const handleRefresh = async () => {
    setRefreshing(true);
    fetchPosts();
    setRefreshing(false);
  };

  useEffect(() => {
    const unSub = fetchPosts();

    return () => {
      unSub;
    };
  }, [fetchPosts]);

  if (loading) {
    console.log("loading...");
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#008325" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.view}>
      {error.res && <ErrorDiv error={error} setError={setError} />}
      <Filter />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <PostDiv />
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
    backgroundColor: "#fff",
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
  },
});
