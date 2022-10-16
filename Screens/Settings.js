import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import FloatingBtn from "../components/general/Floatingbtn";
import BodyTextBold from "../components/general/BodyTextBold";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";

const Settings = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout());
  };

  const lists = [
    {
      id: 1,
      title: "My Profile",
      link: () => navigation.navigate("ProfileScreen"),
      icon: <FontAwesome5 name="user-circle" size={25} color="black" />,
    },
    // {
    //   id: 2,
    //   title: "Notification Settings",
    //   link: () => navigation.navigate("ProfileScreen"),
    //   icon: <Ionicons name="notifications-outline" size={25} color="black" />,
    // },
    {
      id: 3,
      title: "Logout",
      link: handleLogout,
      icon: <AntDesign name="logout" size={25} color="black" />,
    },
  ];

  return (
    <View style={styles.view}>
      <View style={styles.listDiv}>
        {lists.map((item) => (
          <TouchableOpacity
            onPress={item.link}
            style={styles.list}
            key={item.id}
          >
            <View style={styles.align}>
              <View>{item.icon}</View>
              <BodyTextBold style={styles.text}>{item.title}</BodyTextBold>
            </View>
            <Ionicons name="chevron-forward-outline" size={30} color="black" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Floating Btn */}
      <FloatingBtn navigation={navigation} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
    zIndex: -1,
    paddingTop: 20,
  },
  float: {
    position: "absolute",
    bottom: -30,
    zIndex: 3,
  },

  list: {
    flexDirection: "row",
    paddingVertical: 20,
    borderTopColor: "#eee",
    borderTopWidth: 1,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  align: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    paddingLeft: 15,
  },
});
