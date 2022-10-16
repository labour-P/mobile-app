import React from "react";
import { View, StyleSheet, Image } from "react-native";
import HeadingText from "../components/general/HeadingText";
import { useSelector } from "react-redux";
import LinkText from "../components/general/LinkText";
import BodyTextBold from "../components/general/BodyTextBold";
import BodyTextLight from "../components/general/BodyTextLight";
import { Ionicons, Fontisto, AntDesign } from "@expo/vector-icons";
import ProfileInitials from "../components/general/ProfileInitials";
import { getInitials } from "../utils/getInitials";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);

  const userInitials = getInitials(user.name);

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.div}>
        <View
          style={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingHorizontal: 20,
            paddingBottom: 10,
          }}
        >
          <HeadingText style={{ fontSize: 18, textTransform: "capitalize" }}>
            {user.name}
          </HeadingText>
          <View style={styles.alignDiv}>
            <ProfileInitials
              userInitials={userInitials}
              size={100}
              fontSize={35}
            />
            <LinkText
              onPress={() => navigation.navigate("EditProfileScreen")}
              style={styles.edit}
            >
              Edit profile
            </LinkText>
          </View>
          <View>
            <BodyTextBold>{user.name}</BodyTextBold>
            <BodyTextLight style={{ opacity: 0.5 }}>
              @{user.userName}
            </BodyTextLight>
          </View>
          <View style={styles.options}>
            <View style={styles.flex}>
              <Ionicons name="location-outline" size={18} color="black" />
              <BodyTextBold style={styles.opacity}> {user.state}</BodyTextBold>
            </View>
            <View style={styles.flex}>
              <Fontisto name="email" size={18} color="black" />
              <BodyTextBold style={styles.opacity}> {user.email}</BodyTextBold>
            </View>
            <View style={styles.flex}>
              <AntDesign name="phone" size={18} color="black" />
              <BodyTextBold style={styles.opacity}> {user.phone}</BodyTextBold>
            </View>
          </View>
        </View>
        <View style={styles.post}>
          <BodyTextLight>You have no post yet</BodyTextLight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  div: {
    // paddingHorizontal: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  alignDiv: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  edit: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  opacity: {
    opacity: 0.5,
    fontSize: 11,
  },
  post: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
