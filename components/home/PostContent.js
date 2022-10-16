import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Comment from "../../svg/Comment";
import Speaker from "../../svg/Speaker";
import BodyTextBold from "../general/BodyTextBold";
import BodyTextLight from "../general/BodyTextLight";
import ButtonSmall from "../general/ButtonSmall";
import Card from "../general/Card";
import HeadingText from "../general/HeadingText";
import LinkText from "../general/LinkText";

const PostContent = ({ navigation }) => {
  return (
    <View style={styles.postDiv}>
      <Card style={styles.div}>
        <HeadingText style={{ fontSize: 20 }}>
          Latest obidient content
        </HeadingText>
        <BodyTextLight style={{ paddingVertical: 5 }}>
          post latest relevant content here to enable other obididents know
          whats.
        </BodyTextLight>
        <View style={{ marginTop: 10 }}>
          <LinkText
            onPress={() => navigation.navigate("CreatePostScreen")}
            style={{ color: "#009245", fontSize: 16 }}
          >
            Add new post
          </LinkText>
        </View>
      </Card>
      <View style={styles.chatDiv}>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate("TrendsScreen")}>
            <Comment />
            <BodyTextLight>Chat with fellow obidients</BodyTextLight>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate("TrendsScreen")}>
            <Speaker />
            <BodyTextLight>Latest Campaign Updates</BodyTextLight>
          </TouchableOpacity>
        </Card>
      </View>
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({
  postDiv: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  div: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
  },
  chatDiv: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
  },
  card: {
    padding: 10,
    width: "48%",
  },
});
