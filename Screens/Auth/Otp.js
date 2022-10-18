import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import InputDiv from "../../components/forms/InputDiv";
import OtpInput from "../../components/forms/OtpInput";
import BodyTextBold from "../../components/general/BodyTextBold";
import BodyTextLight from "../../components/general/BodyTextLight";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import LinkText from "../../components/general/LinkText";
import Wrapper from "../../components/general/Wrapper";
import { colors } from "../../constants/color";
import OtpSvg from "../../svg/OtpSvg";
import { errorOtp } from "./error";

const Otp = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const MAX_LENGTH = 6;
  const [otpReady, setOtpReady] = useState(false);
  const [error, setError] = useState({});

  const { token } = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    const res = errorOtp(otp, token, setError);

    if (!res) {
      setError((errors) => ({ ...errors, res: "" }));
      navigation.navigate("StateScreen");
    }
  };

  return (
    <Wrapper>
      <View style={styles.view}>
        {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <OtpSvg />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <HeadingText>Let's verify your phone number</HeadingText>
          <BodyTextLight
            style={{
              textAlign: "center",
              paddingHorizontal: 35,
              marginTop: 20,
              opacity: 0.8,
            }}
          >
            we just sent a one time password to your mobile number
            <Text style={{ color: colors.greenText }}> *****91123</Text>
          </BodyTextLight>
        </View>
        <View style={styles.otpDiv}>
          <OtpInput
            otp={otp}
            setOtp={setOtp}
            maxLength={MAX_LENGTH}
            setOtpReady={setOtpReady}
            error={error.otp}
            // placeholder="012345"
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <BodyTextBold style={{ opacity: 0.7 }}>
            didn't receive any text?
          </BodyTextBold>
          <LinkText
            style={{
              color: colors.greenText,
              fontFamily: "bold",
              marginTop: 10,
              fontSize: 15,
            }}
          >
            resend OTP
          </LinkText>
        </View>

        <View>
          <ButtonDiv error={error.res} onPress={handleSubmit}>
            Next
          </ButtonDiv>
        </View>

        <ForwardForever />
        {/* </TouchableWithoutFeedback> */}
      </View>
    </Wrapper>
  );
};

export default Otp;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    paddingVertical: 10,
  },
  otpDiv: {
    flexDirection: "row",
  },
});
