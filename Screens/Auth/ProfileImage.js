import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";
import HeadingText from "../../components/general/HeadingText";
import { FontAwesome } from "@expo/vector-icons";
import LinkText from "../../components/general/LinkText";
import { useDispatch } from "react-redux";
// import formData from "../../utils/formData";
import ButtonDiv from "../../components/general/ButtonDiv";
import { SET_PROFILE_IMAGE, uploadProfileImg } from "../../redux/actions/auth";
import { colors } from "../../constants/color";
import Wrapper from "../../components/general/Wrapper";
import ForwardForever from "../../components/general/ForwardForever";
import configs from "../../config/config";

const ProfileImage = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      return setError("Please select an image");
    }

    const data = new FormData();

    data.append("file", {
      name: `image.jpeg`,
      type: "image/jpeg",
      uri: image.uri,
    });

    console.log(data);
    setLoading(true);
    try {
      const res = await fetch(`${configs.BASE_URL}/upload`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: data,
      });

      const response = await res.json();
      console.log(response);
      dispatch({ type: SET_PROFILE_IMAGE, payload: response.url });
      navigation.navigate("UsernameAndPasswordScreen");
    } catch (error) {
      console.log(error);
      const msg = "File must not exceed 5mb.";
      setError(msg);
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <View style={styles.div}>
        <Image
          style={{ width: 150, height: 120 }}
          source={require("./../../assets/img/obidatti-signup.png")}
          resizeMode="contain"
        />
        <HeadingText style={{ textAlign: "center" }}>
          Please choose a profile image
        </HeadingText>
        <View style={styles.center}>
          {!image ? (
            <FontAwesome
              name="user-circle-o"
              size={150}
              color={colors.primaryGray}
            />
          ) : (
            <Image
              source={{ uri: image.uri }}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          )}
        </View>
        <View style={styles.center}>
          {!image ? (
            <LinkText style={styles.btn} onPress={pickImage}>
              Choose Image
            </LinkText>
          ) : (
            <LinkText style={styles.btn} onPress={pickImage}>
              Change Image
            </LinkText>
          )}
        </View>

        <View style={{ marginTop: 30 }}>
          <ButtonDiv loading={loading} error={error} onPress={handleSubmit}>
            Submit
          </ButtonDiv>
        </View>
        <ForwardForever />
      </View>
    </Wrapper>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  div: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    height: Dimensions.get("window").height,
    paddingVertical: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  btn: {
    color: colors.greenText,
    fontSize: 18,
  },
});
