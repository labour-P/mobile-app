import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import ChatDiv from "../components/home/ChatDiv";
import PostContent from "../components/home/PostContent";
import Advertise from "../components/home/Advertise";
import Support from "../components/home/Support";
import FloatingBtn from "../components/general/Floatingbtn";
import { colors } from "../constants/color";
import { generateRandomString } from "../utils/generateRandomString";
import { currentTime } from "../utils/getDate";
import VideoDiv from "../components/general/VideoDiv";
import * as Linking from "expo-linking";
import DownloadManifesto from "../components/home/DownloadManifesto";
import { Ionicons } from "@expo/vector-icons";
import BodyTextLight from "../components/general/BodyTextLight";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <View style={styles.mainView}>
          <ChatDiv navigation={navigation} />

          <DownloadManifesto />

          <PostContent navigation={navigation} />

          <VideoDiv />
          <Advertise navigation={navigation} />

          <Support navigation={navigation} />
        </View>
      </ScrollView>

      {/* Floating button */}
      <View style={styles.floatDiv}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NotificationsScreen")}
          style={styles.float}
        >
          <Ionicons name="chatbubble-outline" size={30} color={colors.white} />
          <BodyTextLight
            style={{
              fontSize: 10,
              paddingHorizonta: 20,
              width: "70%",
              textAlign: "center",
            }}
          >
            Chat by State, LGA or Ward
          </BodyTextLight>
        </TouchableOpacity>
      </View>
      <FloatingBtn navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.white,
    zIndex: -1,
  },
  mainView: {
    flex: 1,
    position: "relative",
    backgroundColor: colors.white,
    marginBottom: 50,
  },
  float: {
    position: "absolute",
    bottom: 30,
    // left: 0,
    right: 30,
    zIndex: 3,
    backgroundColor: colors.primaryBg,
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  floatDiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.primaryBg,
  },
});
