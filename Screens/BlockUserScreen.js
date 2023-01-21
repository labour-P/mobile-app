import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions, Alert, ActivityIndicator } from "react-native";
import BodyTextBold from "../components/general/BodyTextBold";
import BodyTextLight from "../components/general/BodyTextLight";
import Header from "../components/general/Header";
import Wrapper from "../components/general/Wrapper";
import { colors } from "../constants/color";
import { Ionicons } from "@expo/vector-icons";
import InputDiv from "../components/forms/InputDiv";
import ButtonDiv from "../components/general/ButtonDiv";
import { stateError } from "./Auth/error";
import { useDispatch, useSelector } from "react-redux";
import { currentTime } from "../utils/getDate";
import { makeContribution } from "../redux/actions/support";
import ErrorDiv from "../utils/ErrorDiv";
import { generateId } from "../utils/generateRandomString";
import { postData } from "../utils/getData";
import Logo from "../components/images/Logo";

const BlockUser = ({ navigation, route }) => {
  const { userid, username } = route.params;
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleSubmit = async () => {
    const data = {
      eventid: userid,
      eventType: "users",
    };

    setLoading(true);
    try {
      const res = await postData("/admin/report", data);
       Alert.alert(
         "Request sent",
         " Your indiscretion reports are important to us, we will look into your reports and take necessary actions",
         [
           // {
           //   text: "Cancel",
           //   onPress: () => console.log("Cancel Pressed"),
           //   style: "cancel",
           // },
           { text: "OK", onPress: () => console.log("OK Pressed") },
         ]
       );
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      {error.res && <ErrorDiv error={error} setError={setError} />}
      <Header navigation={navigation} text={"Block User"} />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: Dimensions.get("window").height - 250,
        }}
      >
        <Logo />
        <View style={{ paddingHorizontal: 20 }}>
          <BodyTextLight>You are about to block - {username}</BodyTextLight>
          <BodyTextLight
            style={{ paddingVertical: 10, opacity: 0.6, textAlign: "center" }}
          >
            Your indiscretion reports are important to us.
          </BodyTextLight>
          <BodyTextLight
            style={{ paddingVertical: 10, opacity: 0.6, textAlign: "center" }}
          >
            Tap submit, to send us an indiscretion report on any post.
          </BodyTextLight>
        </View>
        <View style={{ marginTop: 30 }}>
          <ButtonDiv loading={loading} onPress={handleSubmit} error={error.res}>
            Submit
          </ButtonDiv>
        </View>
      </View>
    </Wrapper>
  );
};

export default BlockUser;

const styles = StyleSheet.create({});
