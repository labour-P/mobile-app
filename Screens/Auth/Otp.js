import React, { useEffect, useState, useRef } from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import OtpInput from "../../components/forms/OtpInput";
import BodyTextBold from "../../components/general/BodyTextBold";
import BodyTextLight from "../../components/general/BodyTextLight";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import LinkText from "../../components/general/LinkText";

const Otp = ({ navigation }) => {
  const otp1 = useRef();
  const otp2 = useRef();
  const otp3 = useRef();
  const otp4 = useRef();
  const otp5 = useRef();
  const otp6 = useRef();
  const [error, setError] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.view}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <HeadingText>OTP</HeadingText>
          <BodyTextLight
            style={{
              textAlign: "center",
              paddingHorizontal: 35,
              marginTop: 20,
            }}
          >
            we just sent a one time password to your mobile number *****91123
          </BodyTextLight>
        </View>
        <View style={styles.otpDiv}>
          <OtpInput ref={otp1} error={error} keyboardType="default" />
          <OtpInput ref={otp2} error={error} keyboardType="default" />
          <OtpInput ref={otp3} error={error} keyboardType="default" />
          <OtpInput ref={otp4} error={error} keyboardType="default" />
          <OtpInput ref={otp5} error={error} keyboardType="default" />
          <OtpInput ref={otp6} error={error} keyboardType="default" />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <BodyTextBold style={{ opacity: 0.7 }}>
            didn't receive any text?
          </BodyTextBold>
          <LinkText
            style={{
              color: "#008325",
              fontFamily: "bold",
              marginTop: 10,
              fontSize: 15,
            }}
          >
            resend OTP
          </LinkText>
        </View>

        <View>
          <ButtonDiv onPress={() => navigation.navigate("StateScreen")}>
            Next
          </ButtonDiv>
        </View>

        <ForwardForever />
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
    marginTop: 60,
  },
  otpDiv: {
    flexDirection: "row",
  },
});
