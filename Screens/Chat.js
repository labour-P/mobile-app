import React from "react";
import {
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import BodyTextLight from "../components/general/BodyTextLight";
import HeadingText from "../components/general/HeadingText";
import LinkText from "../components/general/LinkText";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { colors } from "../constants/color";
import Header from "../components/general/Header";
import Wrapper from "../components/general/Wrapper";
import { generateId } from "../utils/generateRandomString";

const Chat = ({ navigation, route }) => {
  const { person, contacts, view, img } = route.params;
  console.log(contacts);
  return (
    <Wrapper>
      <View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={28} color={colors.white} />
          <BodyTextLight style={{ color: "#fff", paddingLeft: 10 }}>
            Back
          </BodyTextLight>
        </TouchableOpacity>
        <Image source={img} style={styles.img} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.textDiv}>
            <BodyTextLight style={{ color: "#fff", zIndex: 10 }}>
              Chat with {person}
            </BodyTextLight>
            <Octicons
              name="comment-discussion"
              size={23}
              color={colors.white}
              style={{ zIndex: 10, marginLeft: 10 }}
            />
          </View>
        </View>

        <View style={styles.overlay}></View>
      </View>

      <View style={{ marginTop: 30 }}>
        <BodyTextLight style={{ textAlign: "center", paddingBottom: 15 }}>
          Please select your prefered medium
        </BodyTextLight>
        {contacts.map((item) => {
          console.log(item.action);
          return (
            <View>
              <TouchableOpacity
                key={generateId()}
                onPress={() => Linking.openURL(item.action)}
                style={styles.list}
              >
                <Ionicons name={item.icon} size={24} color={colors.black} />
                <BodyTextLight style={{ paddingLeft: 30 }}>
                  {item.text}
                </BodyTextLight>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </Wrapper>
  );
};

export default Chat;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 25,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
  },
  img: {
    width: Dimensions.get("window").width,
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#000",
    opacity: 0.4,
    alignItems: "center",
  },
  back: {
    position: "absolute",
    top: 10,
    left: 15,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    flexDirection: "row",
    overflow: "hidden",
  },
  textDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
  },
});
