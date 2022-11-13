import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Wrapper from "../components/general/Wrapper";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import HeadingText from "../components/general/HeadingText";
import { colors } from "../constants/color";
import ProfileInitials from "../components/general/ProfileInitials";
import { useSelector, useDispatch } from "react-redux";
import { getInitials } from "../utils/getInitials";
import * as ImagePicker from "expo-image-picker";
import InputDiv from "../components/forms/InputDiv";
import BodyTextBold from "../components/general/BodyTextBold";
import PostButton from "../components/general/PostButton";
import { postData } from "../utils/getData";
import configs from "../config/config";
import ErrorDiv from "../utils/ErrorDiv";

const EditProfile = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userInitials = getInitials(user.name);

  const [details, setDetails] = useState({
    name: "",
    username: "",
    img: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [postDataIsValid, setPostDataIsValid] = useState(false);
  const [selectedImg, setSelectedImg] = useState(false);

  useEffect(() => {
    setDetails((details) => ({
      ...details,
      name: user.name,
      username: user.userName,
      img: user.img,
    }));
  }, [user.name, user.userName]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImg(true);
      console.log(result);
      setDetails((details) => ({ ...details, img: result }));
    }
  };
  console.log(details?.img?.uri);

  const checkError = (details) => {
    if (!details.name.trim()) {
      setError((errors) => ({ ...errors, name: "Name cannot be empty" }));
      return true;
    } else {
      setError((errors) => ({ ...errors, name: "" }));
    }

    if (!details.username.trim()) {
      setError((errors) => ({
        ...errors,
        username: "User ame cannot be empty",
      }));
      return true;
    } else {
      setError((errors) => ({ ...errors, username: "" }));
    }
  };

  const handleSubmit = async () => {
    const err = checkError(details);

    if (!err) {
      setLoading(true);

      try {
        let response;

        if (selectedImg) {
          const formData = new FormData();

          formData.append("file", {
            name: `image.jpeg`,
            type: "image/jpeg",
            uri: details.img.uri,
          });

          console.log(data);

          const res = await fetch(`${configs.BASE_URL}/upload`, {
            method: "POST",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: formData,
          });

          response = await res.json();
        }

        const data = {
          name: details.name,
          userName: details.username,
          id: user._id,
          profileurl: response.url ? response.url : null,
        };

        const responseTwo = await fetch(`${configs.BASE_URL}/api/auth/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const resTwo = await responseTwo.json();

        console.log(resTwo);

        navigation.navigate("drawer");
      } catch (error) {
        setError((errors) => ({ ...errors, res: error.message }));
      }
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      {error.res && <ErrorDiv error={error} setError={setError} />}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderBottomColor: colors.primaryGray,
          borderBottomWidth: 1,
          backgroundColor: colors.white,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={25} color={colors.black} />
          </TouchableOpacity>
          <View>
            <HeadingText style={{ paddingLeft: 15 }}>Edit Profile</HeadingText>
          </View>
        </View>
        <View>
          <PostButton
            loading={loading}
            handleSubmit={handleSubmit}
            postDataIsValid={postDataIsValid}
          />
        </View>
      </View>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.imgDiv}>
          <Image
            source={{ uri: selectedImg ? details?.img?.uri : user.profileUrl }}
            style={styles.img}
          />

          <View style={styles.cameraDiv}></View>
          <Ionicons
            name="camera-outline"
            size={35}
            color={colors.white}
            style={styles.camera}
          />
        </View>
      </TouchableOpacity>
      <View>
        <View>
          <BodyTextBold style={{ paddingLeft: 20 }}>Name</BodyTextBold>
          <InputDiv
            title={"Name"}
            value={details.name}
            name={"name"}
            placeholder={details.name}
            onChangeText={(name) =>
              setDetails((details) => ({ ...details, name }))
            }
            error={error.name}
          />
        </View>
        <View>
          <BodyTextBold style={{ paddingLeft: 20 }}>User Name</BodyTextBold>
          <InputDiv
            value={details.username}
            name={"username"}
            placeholder={details.username}
            onChangeText={(username) =>
              setDetails((details) => ({ ...details, username }))
            }
            error={error.username}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  imgDiv: {
    padding: 15,
    position: "relative",
    width: 100,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  camera: {
    position: "absolute",
    bottom: 40,
    right: 17,
    // left: 0,
  },
});
