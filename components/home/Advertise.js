import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { colors } from "../../constants/color";
import BodyTextBold from "../general/BodyTextBold";
import Card from "../general/Card";
import Carousel from "pinar";

const Advertise = ({ navigation }) => {
  const Nav = (props) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate}>
        {props.children}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.div}>
      <Carousel
        width={Dimensions.get("window").width}
        height={200}
        loop={true}
        showsControls={false}
        autoplay={true}
        autoplayInterval={8000}
        showsDots={false}
      >
        <Card style={styles.card}>
          <Image
            source={require("../../assets/img/ads.png")}
            style={styles.adsImg}
          />
          {/* <View style={styles.overlay}></View> */}
        </Card>
        <Card style={styles.card}>
          <Image
            source={require("../../assets/img/ads.png")}
            style={styles.adsImg}
          />
          {/* <View style={styles.overlay}></View> */}
        </Card>
      </Carousel>
      <Carousel
        width={Dimensions.get("window").width}
        height={40}
        loop={true}
        showsControls={false}
        autoplay={true}
        autoplayInterval={10000}
        showsDots={false}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("AdvertiseScreen")}
          style={styles.overlayDiv}
        >
          <BodyTextBold style={styles.overlayTextOne}>
            Advertise, click here
          </BodyTextBold>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AdvertiseScreen")}
          style={styles.overlayDiv}
        >
          <BodyTextBold style={styles.overlayTextTwo}>
            Advertise, click here
          </BodyTextBold>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AdvertiseScreen")}
          style={styles.overlayDiv}
        >
          <BodyTextBold style={styles.overlayTextThree}>
            Advertise, click here
          </BodyTextBold>
        </TouchableOpacity>
      </Carousel>
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
    marginLeft: -20,
  },

  overlayTextOne: {
    color: colors.black,
    fontFamily: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -40,
    fontSize: 10,
    opacity: 0.6,
  },
  overlayTextTwo: {
    color: colors.primaryBg,
    fontFamily: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -40,
    fontSize: 10,
    opacity: 0.6,
  },
  overlayTextThree: {
    color: "#3300cc",
    fontFamily: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    marginLeft: -40,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 10,
    // opacity: 0.6,
  },
});
