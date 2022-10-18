import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../../constants/color";

const SelectImage = ({ setPost, images }) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      allowsMultipleSelection: true,
      selectionLimit: 10,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPost((post) => ({
        ...post,
        images: result.uri ? [result] : result.selected,
      }));
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} style={styles.iconBtn}>
      <Feather name="image" size={30} color={colors.primaryBg} />
    </TouchableOpacity>
  );
};

export default SelectImage;

const styles = StyleSheet.create({});
