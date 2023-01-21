import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../../constants/color";
import Comment from "../../svg/Comment";
import CommentSvg from "../../svg/CommentSvg";
import Speaker from "../../svg/Speaker";
import BodyTextBold from "../general/BodyTextBold";
import BodyTextLight from "../general/BodyTextLight";
import ButtonSmall from "../general/ButtonSmall";
import Card from "../general/Card";
import HeadingText from "../general/HeadingText";
import LinkText from "../general/LinkText";

const PostContent = ({ navigation }) => {
  // const postArr = [
  //   {
  //     id: 1,
  //     img:
  //   }
  // ]

  return (
    <View style={styles.postDiv}>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: -10,
        }}
      >
        <HeadingText>Recent updates</HeadingText>
        <LinkText
          onPress={() => navigation.navigate("AdminPostScreen")}
          style={{ color: colors.error }}
        >
          See more
        </LinkText>
      </View> */}
      <View style={styles.chatDiv}>
        <Card style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AdminPostScreen")}
            style={{ height: "100%" }}
          >
            <Image
              source={require("./../../assets/img/imgTwo.jpeg")}
              style={styles.img}
              resizeMode="cover"
            />
            <View style={styles.overlay}></View>
            <View
              style={{
                padding: 10,
                justifyContent: "flex-end",
                alignItems: "flex-start",
                alignSelf: "flex-end",
                height: "100%",
              }}
            >
              <BodyTextLight style={{ color: "#fff", paddingBottom: 15 }}>
                Latest Campaign Updates
              </BodyTextLight>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={{ flex: 0.8 }}>
                  <BodyTextLight style={{ color: "#fff", fontSize: 13 }}>
                    DG. Campaign
                  </BodyTextLight>
                  {/* <BodyTextLight
                    style={{
                      fontFamily: "normal",
                      color: "#fff",
                      fontSize: 12,
                    }}
                  >
                    DG. Campaign
                  </BodyTextLight> */}
                </View>
                <View style={{ flex: 0.2 }}>
                  <Speaker />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity
            style={{ height: "100%" }}
            onPress={() => navigation.navigate("NotificationsScreen")}
          >
            <Image
              source={require("./../../assets/img/imgOne.png")}
              style={styles.img}
              resizeMode="cover"
            />
            <View style={styles.overlay}></View>
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                alignSelf: "flex-end",
                height: "100%",
              }}
            >
              <BodyTextLight style={styles.overlayText}>
                Chat with fellow obidients
              </BodyTextLight>
              <View style={{ flex: 0.2 }}>
                <Comment />
              </View>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({
  postDiv: {
    // marginTop: 10,
    paddingHorizontal: 20,
  },
  div: {
    width: "100%",
    backgroundColor: colors.white,
    padding: 10,
  },
  chatDiv: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    height: 220,
    justifyContent: "flex-end",
  },
  img: {
    width: "100%",
    height: "100%",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    resizeMode: "cover",
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    opacity: 0.5,
    borderRadius: 10,
  },
  overlayText: {
    color: "#fff",
    flex: 0.8,
    fontSize: 14,
  },
});
