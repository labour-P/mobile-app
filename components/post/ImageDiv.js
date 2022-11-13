import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { generateId } from "../../utils/generateRandomString";

const ImageDiv = ({ img }) => {
  let imgStyles;
  let imgDivStyles;

  if (img.length === 1) {
    imgStyles = styles.oneImg;
    imgDivStyles = styles.oneImgDiv;
  } else {
    imgStyles = styles.twoImg;
    imgDivStyles = styles.twoImgDiv;
  }

  return (
    <View
      style={{
        width: "95%",
        flexDirection: "row",
        overflow: "hidden",
        alignItems: "center",
        borderRadius: 15,
        marginTop: 10,
      }}
    >
      <View style={imgDivStyles}>
        {img.map((img) => (
          <Image
            key={generateId()}
            source={{
              uri: img,
            }}
            style={imgStyles}
            resizeMode="cover"
          />
        ))}
      </View>
    </View>
  );
};

export default ImageDiv;

const styles = StyleSheet.create({
  oneImgDiv: {
    flex: 1,
  },
  twoImgDiv: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  oneImg: {
    width: "100%",
    height: 200,
  },
  twoImg: {
    width: "49%",
    height: 200,
  },
});
