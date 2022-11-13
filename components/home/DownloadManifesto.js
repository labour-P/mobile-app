import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../../constants/color";
import BodyTextBold from "../general/BodyTextBold";
import BodyTextLight from "../general/BodyTextLight";
import Card from "../general/Card";
import HeadingText from "../general/HeadingText";
import * as Linking from "expo-linking";

const DownloadManifesto = () => {
  return (
    <View style={{ paddingVertical: 25, paddingHorizontal: 20, marginTop: 10 }}>
      <Card style={styles.card}>
        <TouchableOpacity
          style={styles.alignDiv}
          onPress={() =>
            Linking.openURL(
              "https://drive.google.com/file/d/1oiA0XH6iIDhBQ8VYrCo2IGpfuTD0igiX/view?usp=sharing"
            )
          }
        >
          <View style={styles.imgDiv}>
            <Image
              source={require("./../../assets/img/imgThree.png")}
              style={styles.img}
              resizeMode="cover"
            />
          </View>
          <View style={styles.align}>
            <View style={styles.textDiv}>
              <BodyTextLight
                style={{ color: colors.white, marginBottm: 50, fontSize: 17 }}
              >
                Moving Nigeria Forward
              </BodyTextLight>
              <View>
                <Image
                  source={require("./../../assets/img/logo-main.png")}
                  style={styles.logoImg}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default DownloadManifesto;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  },
  imgDiv: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: 200,
    overflow: "hidden",
  },

  card: {
    height: 200,
    overflow: "hidden",
  },
  logoImg: {
    width: 50,
    height: 50,
  },
  textDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: "100%",
  },
  align: {
    justifyContent: "flex-end",
    padding: 10,
  },
  alignDiv: {
    justifyContent: "flex-end",
    height: "100%",
  },
});
