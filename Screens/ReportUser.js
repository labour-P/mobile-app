import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Linking,
  Alert,
  ActivityIndicator,
} from "react-native";
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
import LinkText from "../components/general/LinkText";

const ReportUser = ({ navigation, route }) => {
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
        " Your indiscretion reports are important to us, we will look into your report and take necessary actions",
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
      <Header navigation={navigation} text={`Report @${username}`} />

      <View
        style={{
          justifyContent: "center",
          height: Dimensions.get("window").height - 250,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {loading && (
            <ActivityIndicator
              style={{ marginVertical: 20 }}
              size={"small"}
              color={colors.primaryBg}
            />
          )}
          <Logo />
        </View>
        <View style={{}}>
          <BodyTextLight
            style={{
              textAlign: "left",
              marginTop: 30,
              fontSize: 18,
              paddingHorizontal: 20,
            }}
          >
            Help us undertand the issue. whats the problem with this user
          </BodyTextLight>

          <View style={{ marginTop: 30 }}>
            <TouchableOpacity
              style={{
                paddingVertical: 20,
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
              }}
              onPress={handleSubmit}
            >
              <BodyTextLight style={{ fontSize: 17, paddingHorizontal: 20 }}>
                is violating our users policy agreement
              </BodyTextLight>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 20,
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
              }}
              onPress={handleSubmit}
            >
              <BodyTextLight style={{ fontSize: 17, paddingHorizontal: 20 }}>
                Is abusive or insighting
              </BodyTextLight>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <LinkText
            onPress={() => Linking.openURL("http://labourp.ng/ugc.html")}
            style={{ color: colors.primaryBg, fontSize: 14 }}
          >
            Learn more
          </LinkText>
          <BodyTextLight
            style={{ fontSize: 14, alignItems: "center", paddingLeft: 5 }}
          >
            about reporting violations of our rules.
          </BodyTextLight>
        </View>
        <View style={{ marginTop: 80 }}></View>
      </View>
    </Wrapper>
  );
};

export default ReportUser;

const styles = StyleSheet.create({});
