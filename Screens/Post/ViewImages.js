import React from "react";
import { Image, View, StyleSheet, FlatList } from "react-native";
import HeadingText from "../../components/general/HeadingText";

const ViewImages = ({ route }) => {
  const { images } = route.params;

  return (
    <View>
      <HeadingText>Hello</HeadingText>
      <FlatList
        data={images}
        keyExtractor={(item) => item.uri}
        renderItem={(image) => (
          <View>
            <Image
              source={{ uri: image.uri }}
              style={{ width: 200, height: 300 }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ViewImages;
