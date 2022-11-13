import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Linking,
} from "react-native";
import { colors } from "../../constants/color";
import Chat from "../../svg/Chat";
import { generateId } from "../../utils/generateRandomString";
import BodyTextLight from "../general/BodyTextLight";
import Card from "./../general/Card";
import { Octicons } from "@expo/vector-icons";

const ChatDiv = ({ navigation }) => {
  const chats = [
    {
      id: 1,
      img: require("./../../assets/img/obi.jpeg"),
      text: "Chat with Obi",
      view: "Chat with Mr. Peter Obi",
      person: "Peter Obi",
      contacts: [
        {
          id: 1,
          call: "08162468435",
          text: "Call",
          icon: "call-outline",
          action: `tel:08162468435`,
        },
        {
          id: 2,
          chat: "09125535185",
          text: "Chat via whatsapp",
          icon: "chatbox-outline",
          action: `https://wa.me/+2349125535185`,
        },
        {
          id: 3,
          chat: "09125535185",
          text: "Video call via whatsapp",
          icon: "videocam-outline",
          action: `https://wa.me/+2349125535185`,
        },
      ],
    },
    {
      id: 2,
      img: require("./../../assets/img/dati.png"),
      text: " Chat with Datti",
      view: "Chat with Sen. Datti Baba-Ahmed",
      person: "Ahmed Datti",
      contacts: [
        {
          id: 1,
          call: "08162419281",
          text: "Call",
          icon: "call-outline",
          action: `tel:08162419281`,
        },
        {
          id: 2,
          chat: " 09125530647",
          text: "Chat via whatsapp",
          icon: "chatbox-outline",
          action: `https://wa.me/+2349125530647`,
        },
        {
          id: 3,
          chat: "09125530647",
          text: "Video call via whatsapp",
          icon: "videocam-outline",
          action: `https://wa.me/+2349125530647`,
        },
      ],
    },
  ];

  return (
    <View style={styles.imgDiv}>
      {chats.map((chat) => (
        <Card key={generateId()} style={styles.imgCard}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ChatScreen", {
                person: chat.person,
                contacts: chat.contacts,
                view: chat.view,
                img: chat.img,
              })
            }
          >
            <Image source={chat.img} style={styles.chatImg} />
            <View style={styles.overlayDiv}>
              <BodyTextLight style={styles.overlayText}>
                {chat.text}
              </BodyTextLight>
              <Octicons
                name="comment-discussion"
                size={23}
                color={colors.white}
              />
            </View>
            <View style={styles.overlay}></View>
          </TouchableOpacity>
        </Card>
      ))}
    </View>
  );
};

export default ChatDiv;

const styles = StyleSheet.create({
  imgDiv: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  chatImg: {
    resizeMode: "cover",
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  imgCard: {
    width: "47%",
    height: 200,
    overflow: "hidden",
    position: "relative",
  },
  overlayText: {
    color: colors.white,
    fontSize: 13,
    textAlign: "center",
    marginRight: 5,
  },
  overlayDiv: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    zIndex: 10,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    backgroundColor: colors.black,
    opacity: 0.3,
    height: 40,
    zIndex: 1,
  },
});
