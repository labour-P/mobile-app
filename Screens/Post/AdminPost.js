import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import HeadingText from "../../components/general/HeadingText";
import Wrapper from "../../components/general/Wrapper";
import AdminPostList from "../../components/post/AdminPostList";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../constants/color";
import ErrorDiv from "../../utils/ErrorDiv";
import { generateId } from "../../utils/generateRandomString";
import { useSelector, useDispatch } from "react-redux";
import { getAdminPost } from "../../redux/actions/admin";
import Header from "../../components/general/Header";
import BodyTextBold from "../../components/general/BodyTextBold";
import BodyTextLight from "../../components/general/BodyTextLight";

const AdminPost = ({ navigation }) => {
  const [error, setError] = useState({});

  const { adminPosts } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  const fetchPosts = async () => {
    try {
      await dispatch(getAdminPost());
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      {error.res && <ErrorDiv error={error} setError={setError} />}
      <Header navigation={navigation} text="Latest Campaign Updates" />
      <ScrollView>
        <View style={{ paddingHorizontal: 5 }}>
          {adminPosts.length === 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: 600,
              }}
            >
              <BodyTextLight>No post yet</BodyTextLight>
            </View>
          ) : (
            adminposts.map((post) => (
              <AdminPostList
                navigation={navigation}
                key={generateId()}
                post={post}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdminPost;

const styles = StyleSheet.create({});
