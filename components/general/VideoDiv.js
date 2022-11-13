import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import Carousel from "pinar";
import { colors } from "../../constants/color";
import HeadingText from "./HeadingText";
import ButtonDiv from "./ButtonDiv";
import { Feather } from "@expo/vector-icons";
import ButtonSmall from "./ButtonSmall";
import BodyTextLight from "./BodyTextLight";

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={{ marginTop: 25 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // height: 60,
        }}
      >
        <HeadingText style={{ paddingLeft: 20, flex: 0.7 }}>
          Send us latest Obidient Content
        </HeadingText>
        <TouchableOpacity
          onPress={() => Linking.openURL(`mailto:reachus@labourp.ng`)}
          style={styles.btn}
        >
          {/* <BodyTextLight style={{ color: colors.white }}>
            Send Post
          </BodyTextLight> */}
          <Feather name="send" size={24} color={colors.primaryBg} />
        </TouchableOpacity>
      </View>
      <Carousel
        width={Dimensions.get("window").width}
        height={300}
        loop={false}
        showsControls={false}
        autoplay={false}
        showsDots={true}
        dotsContainerStyle={{
          position: "absolute",
          bottom: 0,
          left: -5,
          right: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
        }}
        activeDotStyle={{
          backgroundColor: colors.primaryBg,
          width: 8,
          height: 8,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
          borderRadius: 100,
        }}
        dotStyle={{
          backgroundColor: "#bbb",
          width: 6,
          height: 6,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
          borderRadius: 100,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <View style={styles.container}>
            <Video
              ref={video}
              style={styles.video}
              source={require("./../../assets/videos/vidOne.mp4")}
              useNativeControls
              resizeMode="contain"
              isLooping={false}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <View style={styles.container}>
            <Video
              ref={video}
              style={styles.video}
              source={require("./../../assets/videos/vidTwo.mp4")}
              useNativeControls
              resizeMode="contain"
              isLooping={false}
            />
          </View>
        </View>
      </Carousel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  video: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    // backgroundColor: "red",
    overflow: "hidden",
  },
  btn: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 20,
    marginTop: -5,
  },
});
