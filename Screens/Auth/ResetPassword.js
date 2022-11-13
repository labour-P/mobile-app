import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import PasswordInputDiv from "../../components/forms/PasswordInputDiv";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import Logo from "../../components/images/Logo";
import { useDispatch, useSelector } from "react-redux";
import { resetError } from "./error";
import BodyTextLight from "../../components/general/BodyTextLight";
import { resetPassword } from "../../redux/actions/auth";
import OtpInput from "../../components/forms/OtpInput";
import Wrapper from "../../components/general/Wrapper";
import configs from "../../config/config";

const ResetPassword = ({ navigation, route }) => {
  const { phone } = route.params;
  const [details, setDetails] = useState({
    password: "",
    confirmPassword: "",
  });
  const [otp, setOtp] = useState("");
  const [otpReady, setOtpReady] = useState(false);
  const MAX_LENGTH = 6;
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const otpPin = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    const res = resetError(details, otp, setError, otpPin);

    if (!res) {
      setLoading(true);
      try {
        const response = await fetch(
          `${configs.BASE_URL}/api/auth/resetpassword`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone: `+234${phone.slice(1)}`,
              password: details.password,
            }),
          }
        );

        const res = await response.json();
        console.log(res);
        console.log("changed");
      } catch (error) {
        setError((error) => ({ ...error, res: error.message }));
      }
      setLoading(false);
    }
  };

  // console.log(error);

  return (
    <Wrapper>
      <View style={styles.view}>
        <Logo />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <HeadingText>Reset password now</HeadingText>
          <BodyTextLight
            style={{
              textAlign: "center",
              paddingHorizontal: 35,
              marginTop: 20,
            }}
          >
            Enter the one time password sent to your number and set a new
            password
          </BodyTextLight>
        </View>
        <View>
          <OtpInput
            otp={otp}
            setOtp={setOtp}
            maxLength={MAX_LENGTH}
            setOtpReady={setOtpReady}
            error={error.otp}
          />
          <PasswordInputDiv
            // title={"Last Name"}
            placeholder={"Password"}
            value={details.password}
            onChangeText={(password) =>
              setDetails((details) => ({ ...details, password }))
            }
            name="password"
            error={error.password}
            keyboardType="password"
          />
          <PasswordInputDiv
            // title={"Last Name"}
            placeholder={"Confirm password"}
            value={details.confirmPassword}
            onChangeText={(confirmPassword) =>
              setDetails((details) => ({ ...details, confirmPassword }))
            }
            name="confirmPassword"
            error={error.confirmPassword}
            keyboardType="password"
          />
        </View>

        <View>
          <ButtonDiv loading={loading} error={error.res} onPress={handleSubmit}>
            Reset
          </ButtonDiv>
        </View>

        <ForwardForever />
      </View>
    </Wrapper>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    paddingVertical: 20,
  },
});
