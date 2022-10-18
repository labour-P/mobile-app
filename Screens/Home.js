import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import ChatDiv from "../components/home/ChatDiv";
import PostContent from "../components/home/PostContent";
import Advertise from "../components/home/Advertise";
import Support from "../components/home/Support";

import FloatingBtn from "../components/general/Floatingbtn";
import { colors } from "../constants/color";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <View style={styles.mainView}>
          <ChatDiv navigation={navigation} />

          <PostContent navigation={navigation} />

          <Advertise />

          <Support />
        </View>
      </ScrollView>

      {/* Floating button */}
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
});
