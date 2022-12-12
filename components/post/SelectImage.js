import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../../constants/color";

const SelectImage = ({ setPost, setMax }) => {
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
      if (result.selected?.length > 2) {
        setMax(true);
        // console.log(result.selected);
        setPost((post) => ({
          ...post,
          images: result.uri
            ? [result.selected[0], result.selected[1]]
            : [result.selected[0], result.selected[1]],
        }));
      } else {
        setPost((post) => ({
          ...post,
          images: result.uri ? [result] : result.selected,
        }));
        setMax(false);
      }
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
