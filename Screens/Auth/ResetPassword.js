import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import InputDiv from "../../components/forms/InputDiv";
import PasswordInputDiv from "../../components/forms/PasswordInputDiv";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import LinkText from "../../components/general/LinkText";
import Logo from "../../components/images/Logo";
import { useDispatch } from "react-redux";
import { resetError } from "./error";
import BodyTextLight from "../../components/general/BodyTextLight";
import { resetPassword } from "../../redux/actions/auth";
import OtpInput from "../../components/forms/OtpInput";

const ResetPassword = ({ navigation }) => {
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

  const handleSubmit = async () => {
    const res = resetError(details, setError);

    if (res !== true) {
      setLoading(true);
      try {
        await dispatch(resetPassword(details));
      } catch (error) {
        setError((error) => ({ ...error, res: error.message }));
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.view}>
        <Logo />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <HeadingText style={{ fontSize: 18 }}>Reset password now</HeadingText>
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
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
    marginTop: 60,
  },
});
