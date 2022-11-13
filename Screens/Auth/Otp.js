import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  Image,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
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
import { verifyEmailAndPhone } from "../../redux/actions/auth";
import OtpSvg from "../../svg/OtpSvg";
import { errorOtp } from "./error";

const Otp = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const MAX_LENGTH = 7;
  const [otpReady, setOtpReady] = useState(false);
  const [error, setError] = useState({});

  const { token, phone, email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const res = errorOtp(otp, token, setError);

    if (!res) {
      setError((errors) => ({ ...errors, res: "" }));
      navigation.navigate("StateScreen");
    }
  };

  const handleResendOtp = async () => {
    try {
      await dispatch(verifyEmailAndPhone({ email, phone }));
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
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
          <Image
            style={{ width: 150, height: 120 }}
            source={require("./../../assets/img/datti-signup.png")}
            resizeMode="contain"
          />
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
              opacity: 0.6,
              fontSize: 14,
            }}
          >
            we just sent a one time password to your mobile number
            <Text style={{ color: colors.greenText }}> {phone}</Text>
          </BodyTextLight>
        </View>
        <View style={styles.otpDiv}>
          <OtpInput
            otp={otp}
            setOtp={setOtp}
            maxLength={MAX_LENGTH}
            setOtpReady={setOtpReady}
            error={error.otp}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <BodyTextLight style={{ opacity: 0.6 }}>
            didn't receive any SMS?
          </BodyTextLight>
          <LinkText
            style={{
              color: colors.greenText,
              fontFamily: "bold",
              marginTop: 10,
              fontSize: 15,
            }}
            onPress={handleResendOtp}
          >
            Resend OTP
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
    paddingVertical: 30,
  },
  otpDiv: {
    flexDirection: "row",
  },
});
