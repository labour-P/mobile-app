import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import BodyTextBold from "../general/BodyTextBold";
import Card from "../general/Card";

const Advertise = () => {
  return (
    <View style={styles.div}>
      <Card style={styles.card}>
        <Image
          source={require("../../assets/img/ads.png")}
          style={styles.adsImg}
        />
        <View style={styles.overlay}></View>
        <View style={styles.overlayDiv}>
          <BodyTextBold style={styles.overlayText}>Advertise here</BodyTextBold>
        </View>
      </Card>
    </View>
  );
};

export default Advertise;

const styles = StyleSheet.create({
  div: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  card: {
    height: 200,
    overflow: "hidden",
    position: "relative",
  },
  adsImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    opacity: 0.3,
  },
  overlayDiv: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
  },
  overlayText: {
    color: "#fff",
    fontFamily: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
});
