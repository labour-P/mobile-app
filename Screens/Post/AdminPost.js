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

  const { adminPost } = useSelector((state) => state.admin);

  console.log(adminPost);
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

  const adminposts = [
    // {
    //   id: 1,
    //   type: "news",
    //   heading: "Precise Onward Unemployemnt Register",
    //   message:
    //     '"The dissatisfied individuals in any society are usually those who feel their potential is underutilized or outrightly unrecognized. One time tested way to engage and recognize the potentials of every individual in any society is employment. I agree completely with one of my scholar friends who says "employment is one of the most equitable means of income distribution." We must take the gathering of data for the unemployed and the underemployed in any society very seriously. -Peter Obi.',
    //   img: require("./../../assets/img/ObiDatti.png"),
    //   date: "12th oct 2022",
    // },
    // {
    //   id: 2,
    //   type: "Rally",
    //   heading: "Nassarawa Rally",
    //   message:
    //     '"The dissatisfied individuals in any society are usually those who feel their potential is underutilized or outrightly unrecognized. One time tested way to engage and recognize the potentials of every individual in any society is employment. I agree completely with one of my scholar friends who says "employment is one of the most equitable means of income distribution." We must take the gathering of data for the unemployed and the underemployed in any society very seriously. -Peter Obi.',
    //   img: require("./../../assets/img/ObiDatti.png"),
    //   date: "12th oct 2022",
    // },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      {error.res && <ErrorDiv error={error} setError={setError} />}
      {/* <View
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
          <HeadingText style={{ paddingLeft: 15 }}>
            Latest Campaign Updates
          </HeadingText>
        </View>
      </View> */}
      <Header navigation={navigation} text="Latest Campaign Updates" />
      <ScrollView>
        <View style={{ paddingHorizontal: 5 }}>
          {adminposts.length === 0 ? (
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
