import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { AntDesign, Fontisto, MaterialIcons } from "@expo/vector-icons";

import LinkText from "../../components/general/LinkText";
import PostForm from "../../components/forms/PostForm";
import BodyTextLight from "../../components/general/BodyTextLight";
import SelectImage from "../../components/post/SelectImage";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/actions/post";
import { currentDate, currentTime } from "../../utils/getDate";
import ErrorDiv from "../../utils/ErrorDiv";
import { generateRandomString } from "../../utils/generateRandomString";
import PostButton from "../../components/general/PostButton";
import ProfileInitials from "../../components/general/ProfileInitials";
import { getInitials } from "../../utils/getInitials";
import { colors } from "../../constants/color";

const CreatePost = ({ navigation }) => {
  const [post, setPost] = useState({
    text: "",
    location: {},
    images: [],
  });
  const [error, setError] = useState({});
  const [postDataIsValid, setPostDataIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [max, setMax] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const userInitials = getInitials(user.name);

  const removeImage = (uri) => {
    const newImages = post.images.filter((image) => image.uri !== uri);

    setPost((post) => ({ ...post, images: newImages }));
  };

  useEffect(() => {
    if (post.text.length) {
      setPostDataIsValid(false);
    } else {
      setPostDataIsValid(true);
    }
  }, [post.text]);

  const handleSubmit = async () => {
    let imgArr = [];

    if (post.images.length === 0) {
      imgArr = [];
    } else {
      post.images.map((img) => {
        let formData = new FormData();
        formData.append("file", {
          name: `image.jpeg`,
          type: "image/jpeg",
          uri: img.uri,
        });

        imgArr.push(formData);
      });
    }

    const data = {
      userid: user._id,
      username: user.userName,
      name: user.name,
      profileUrl: user.profileUrl,
      thread: generateRandomString(),
      location: `${user.state} - ${user.lga}`,
      date: new Date(),
      time: currentTime,
      message: post.text,
      imageurl: imgArr,
      videourl: [],
    };
    setLoading(true);
    try {
      await dispatch(createPost(data));
      navigation.navigate("drawer");
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
    }
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMax(false);
    }, 4000);

    return () => clearInterval(timer);
  }, [max]);

  return (
    <SafeAreaView style={styles.view}>
      {error.res && <ErrorDiv error={error} setError={setError} />}
      <View style={styles.topDiv}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={30} color={colors.darkText} />
        </TouchableOpacity>
        <View>
          <PostButton
            loading={loading}
            handleSubmit={handleSubmit}
            postDataIsValid={postDataIsValid}
          />
        </View>
      </View>
      <View style={styles.mainDiv}>
        <View style={styles.imgDiv}>
          <Image
            source={{ uri: user.profileUrl }}
            style={{ width: 60, height: 60, borderRadius: 100 }}
          />
        </View>
        <View style={styles.form}>
          <View style={styles.textForm}>
            <PostForm
              value={post.text}
              name="text"
              error={error.text}
              onChangeText={(text) => setPost((posts) => ({ ...posts, text }))}
              placeholder="What's happening around you...?"
              multiline={true}
              numberOfLines={8}
            />
          </View>
          {post.images && (
            <View style={styles.imageForm}>
              {post.images.slice(0, 3).map((image) => (
                <View key={image.uri} style={styles.imageSelectedDiv}>
                  <Image
                    source={{ uri: image.uri }}
                    style={{
                      width: "100%",
                      height: "100%",
                      marginHorizontal: 3,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => removeImage(image.uri)}
                    style={{ position: "absolute", top: -8, right: -8 }}
                  >
                    <Text>
                      <MaterialIcons
                        name="cancel"
                        size={30}
                        color={colors.black}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}

              <View
                style={{
                  position: "absolute",
                  right: 30,
                  bottom: "40%",
                }}
              >
                {post.images.length > 3 && (
                  <LinkText
                    // onPress={() =>
                    //   navigation.navigate("ViewImagesScreen", {
                    //     images: post.images,
                    //   })
                    // }
                    style={{ color: colors.white, fontSize: 30 }}
                  >{`+ ${post.images.length - 3}`}</LinkText>
                )}
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={styles.optionsDiv}>
        <View style={styles.inlineOptions}>
          {max === true && (
            <View style={styles.copyDiv}>
              <BodyTextLight style={styles.copyText}>
                Cannot upload more than 2 Images
              </BodyTextLight>
            </View>
          )}
          <SelectImage setMax={setMax} setPost={setPost} />
        </View>
        <View style={styles.inlineOptionsTwo}>
          <Fontisto name="world-o" size={20} color={colors.greenText} />
          <BodyTextLight
            style={{ marginLeft: 15, color: colors.greenText, fontSize: 12 }}
          >
            Everyone can reply
          </BodyTextLight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  topDiv: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    height: "10%",
  },

  imgDiv: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 30,
    // height: "10%",
  },
  profileImg: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  mainDiv: {
    paddingHorizontal: 15,
    marginTop: -20,
    height: "75%",
  },
  form: {
    height: "85%",
  },
  textForm: {
    height: "70%",
  },
  imageSelectedDiv: {
    height: "100%",
    width: "32%",
    marginHorizontal: 2,
  },
  imageForm: {
    height: "30%",
    flexDirection: "row",
    width: "100%",
    position: "relative",
  },
  optionsDiv: {
    flexDirection: "row",
    borderTopColor: colors.primaryGray,
    borderTopWidth: 2,
    marginBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
  },
  iconBtn: {
    paddingHorizontal: 15,
  },
  inlineOptions: {
    flexDirection: "row",
  },
  inlineOptionsTwo: {
    flexDirection: "row",
    borderLeftColor: colors.greenText,
    borderLeftWidth: 1,
    paddingLeft: 20,
  },
  copyDiv: {
    width: Dimensions.get("window").width - 30,
    backgroundColor: "#000",
    paddingHorizontal: 5,
    paddingVertical: 5,
    position: "absolute",
    bottom: 100,
    paddingVertical: 10,
    borderRadius: 30,
    opacity: 0.7,
  },
  copyText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
  },
});
