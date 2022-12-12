import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import BodyTextLight from "./BodyTextLight";
import { colors } from "../../constants/color";
import { useNavigation } from "@react-navigation/native";

const App = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View alignItems={"flex-end"} width={"100%"}>
              <TouchableOpacity onPress={() => props.setModalVisible(false)}>
                <Ionicons
                  name="close-circle-outline"
                  size={30}
                  color={colors.black}
                  style={{ opacity: 0.6 }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ReportPostScreen", {
                    postid: props.postid,
                    username: user.username,
                  });
                  props.setModalVisible(false);
                }}
              >
                <View style={{ flexDirection: "row", paddingVertical: 15 }}>
                  <Ionicons
                    name="flag-outline"
                    size={24}
                    color={colors.black}
                    style={{ opacity: 0.6 }}
                  />
                  <BodyTextLight style={{ paddingLeft: 20, opacity: 0.6 }}>
                    Report Post
                  </BodyTextLight>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ReportUserScreen", {
                    userid: props.userid,
                    username: user.username,
                  });
                  props.setModalVisible(false);
                }}
              >
                <View style={{ flexDirection: "row", paddingVertical: 15 }}>
                  <Feather
                    name="user-x"
                    size={24}
                    color={colors.black}
                    style={{ opacity: 0.6 }}
                  />
                  <BodyTextLight style={{ paddingLeft: 20, opacity: 0.6 }}>
                    Report User
                  </BodyTextLight>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("BlockUserScreen", {
                    userid: props.userid,
                    username: user.username,
                  });
                  props.setModalVisible(false);
                }}
              >
                <View style={{ flexDirection: "row", paddingVertical: 15 }}>
                  <Entypo
                    name="block"
                    size={24}
                    color={colors.black}
                    style={{ opacity: 0.6 }}
                  />
                  <BodyTextLight style={{ paddingLeft: 20, opacity: 0.6 }}>
                    Block user
                  </BodyTextLight>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
    height: 300,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    height: "100%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default App;
