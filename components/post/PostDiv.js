import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import BodyTextLight from "../general/BodyTextLight";
import BoldText from "../general/BoldText";
import { useSelector, useDispatch } from "react-redux";
import ActionDiv from "./ActionDiv";
import CommentDiv from "./CommentDiv";
import ProfileInitials from "../general/ProfileInitials";
import { getInitials } from "../../utils/getInitials";
import { truncate } from "../../utils/truncateText";
import LinkText from "../general/LinkText";
import { timeSince } from "../../utils/timeAgo";
import { currentDate } from "../../utils/getDate";
import configs from "../../config/config";
import { getLikes } from "../../redux/actions/post";

const PostDiv = () => {
  const { posts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const [openComment, setOpenComment] = useState("");
  const [trends, setTrends] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    let newTrends = posts?.sort((a, b) => b.date.localeCompare(a.date));

    setTrends(newTrends);
  }, [posts]);
  // const [divId, setDivId] = useState(null);

  const userInitials = getInitials(user.name);

  return (
    <View>
      {trends?.length ? (
        trends?.map((post, index) => {
          return (
            <View
              style={{
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                flexDirection: "row",
                paddingTop: 15,
              }}
              key={index}
            >
              <View style={styles.profileImgDiv}>
                <ProfileInitials
                  userInitials={userInitials}
                  size={45}
                  fontSize={14}
                />
              </View>
              <View style={{ flex: 0.8, marginLeft: -15, marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingRight: 10,
                  }}
                >
                  <BoldText
                    style={{ textTransform: "capitalize", fontSize: 12 }}
                  >
                    {post?.name}
                  </BoldText>

                  <BodyTextLight style={{ fontSize: 12, opacity: 0.5 }}>
                    {timeSince(post?.date)}
                  </BodyTextLight>
                </View>
                <View style={{ paddingVertical: 5, justifyContent: "center" }}>
                  <BodyTextLight>{truncate(post.message, 50)}</BodyTextLight>
                  {post.message.length > 50 && (
                    <LinkText style={{ color: "#008325" }}>See more</LinkText>
                  )}
                </View>
                {post.imageUrl?.length > 0 ? (
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    {post.imageUrl.map((image, index) => {
                      return (
                        <Image
                          key={index}
                          source={{
                            uri: image.uri,
                          }}
                          style={{
                            width: "48%",
                            height: 160,
                            margin: 1,
                          }}
                        />
                      );
                    })}
                  </View>
                ) : (
                  <View></View>
                )}
                <View style={{ marginTop: 10 }}>
                  <ActionDiv
                    openComment={openComment}
                    setOpenComment={setOpenComment}
                    thread={post.thread}
                  />
                </View>
              </View>
            </View>
          );
        })
      ) : (
        <View>
          <BodyTextLight>no post yet!</BodyTextLight>
        </View>
      )}
    </View>
  );
};

export default PostDiv;

const styles = StyleSheet.create({
  profileImgDiv: {
    flex: 0.2,
    padding: 5,
  },
  profileImg: { width: "100%", height: "100%" },
  postImg: {
    width: 200,
    height: 200,
  },
});
