import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import BodyTextLight from "../components/general/BodyTextLight";
import HeadingText from "../components/general/HeadingText";
import LinkText from "../components/general/LinkText";
import { Ionicons } from "@expo/vector-icons";

const Chat = ({ navigation, route }) => {
  const { person, contacts } = route.params;

  return (
    <View style={{ marginTop: 50 }}>
      <HeadingText style={{ paddingHorizontal: 10 }}>
        Talk with {person}
      </HeadingText>
      <View style={{ marginTop: 50 }}>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => item.action()} style={styles.list}>
              <BodyTextLight>{item.text}</BodyTextLight>
              <Ionicons name={item.icon} size={24} color="black" />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
});
