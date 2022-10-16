import React, { useState } from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import HeadingText from "../../components/general/HeadingText";
import { FontAwesome } from "@expo/vector-icons";
import LinkText from "../../components/general/LinkText";
import { useDispatch } from "react-redux";
import formData from "../../utils/formData";
import ButtonDiv from "../../components/general/ButtonDiv";
import { uploadProfileImg } from "../../redux/actions/auth";

const ProfileImage = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

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

    const data = formData(image);
    try {
      await dispatch(uploadProfileImg(image));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.div}>
        <HeadingText style={{ fontSize: 22, textAlign: "center" }}>
          Choose a profile image
        </HeadingText>
        <View style={styles.center}>
          {!image ? (
            <FontAwesome name="user-circle-o" size={200} color="#555" />
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
      </View>
      <View style={{ marginTop: 30 }}>
        <ButtonDiv error={error} onPress={handleSubmit}>
          Signup
        </ButtonDiv>
      </View>
    </SafeAreaView>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
  },
  div: {
    paddingHorizontal: 20,
    marginTop: 80,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  btn: {
    color: "#008325",
    fontSize: 18,
  },
});
