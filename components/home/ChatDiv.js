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
import BodyTextLight from "../general/BodyTextLight";
import Card from "./../general/Card";

const ChatDiv = ({ navigation }) => {
  const chats = [
    {
      id: 1,
      img: require("./../../assets/img/obi.png"),
      text: "Chat with Obi",
      person: "Peter Obi",
      contacts: [
        {
          id: 1,
          call: "08162468435",
          text: "Call Obi",
          icon: "call-outline",
          action: () => Linking.openURL(`tel:08162468435`),
        },
        {
          id: 2,
          chat: "09125535185",
          text: "Chat with Obi",
          icon: "chatbox-outline",
          action: () => Linking.openURL(`https://wa.me/+2349125535185`),
        },
        {
          id: 3,
          chat: "09125535185",
          text: "Video call with Obi",
          icon: "videocam-outline",
          action: () => Linking.openURL(`https://wa.me/+2349125535185`),
        },
      ],
    },
    {
      id: 2,
      img: require("./../../assets/img/dati.png"),
      text: " Chat with Ahmed",
      person: "Ahmed Datti",
      contacts: [
        {
          id: 1,
          call: "08162419281",
          text: "Call Datti",
          icon: "call-outline",
          action: () => Linking.openURL(`tel:08162419281`),
        },
        {
          id: 2,
          chat: " 09125530647",
          text: "Chat with Datti",
          icon: "chatbox-outline",
          action: () => Linking.openURL(`https://wa.me/+2349125530647`),
        },
        {
          id: 3,
          chat: "09125530647",
          text: "Video call with Datti",
          icon: "videocam-outline",
          action: () => Linking.openURL(`https://wa.me/+2349125530647`),
        },
      ],
    },
  ];

  return (
    <View style={styles.imgDiv}>
      {chats.map((chat) => (
        <Card key={chat.id} style={styles.imgCard}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ChatScreen", {
                person: chat.person,
                contacts: chat.contacts,
              })
            }
          >
            <Image source={chat.img} style={styles.chatImg} />
            <View style={styles.overlayDiv}>
              <BodyTextLight style={styles.overlayText}>
                {chat.text}
              </BodyTextLight>
              <Chat />
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
    height: 180,
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
    zIndex: 2,
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
