import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import BodyTextLight from "../../components/general/BodyTextLight";
import HeadingText from "../../components/general/HeadingText";
import Wrapper from "../../components/general/Wrapper";
import { colors } from "../../constants/color";
import { AntDesign } from "@expo/vector-icons";
import Header from "../../components/general/Header";
import { useNavigation } from "@react-navigation/native";

const ViewAdminPost = ({ route }) => {
  const { post } = route.params;
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Header text={"View Post"} navigation={navigation} />
      <View>
        <View style={styles.imgDiv}>
          <View style={styles.overlay}></View>
          <Image source={post?.img} style={styles.img} resizeMode="contain" />
          <View style={styles.overlayText}>
            <HeadingText style={styles.headingText}>{post?.type}</HeadingText>
            <BodyTextLight style={styles.dateText}>{post?.date}</BodyTextLight>
          </View>
        </View>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
          <HeadingText>{post?.heading}</HeadingText>
          <BodyTextLight style={{ lineHeight: 25 }}>
            {post?.message}
          </BodyTextLight>
        </View>
      </View>
    </Wrapper>
  );
};

export default ViewAdminPost;

const styles = StyleSheet.create({
  imgDiv: {
    // paddingTop: 20,
    height: Dimensions.get("window").height / 2.5,
    position: "relative",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: colors.black,
    opacity: 0.7,
  },
  overlayText: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  headingText: {
    color: colors.white,
    textTransform: "capitalize",
  },
  dateText: {
    color: colors.white,
    opacity: 0.6,
  },
});
