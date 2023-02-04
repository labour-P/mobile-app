import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import InputDiv from "../../components/forms/InputDiv";
import BodyTextLight from "../../components/general/BodyTextLight";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import Logo from "../../components/images/Logo";
import { phoneError } from "./error";
import { useDispatch } from "react-redux";
import { forgotPassword, SET_OTP } from "../../redux/actions/auth";
import Wrapper from "../../components/general/Wrapper";
import configs from "../../config/config";
import ErrorDiv from "../../utils/ErrorDiv";
import axios from "axios";

const RecoverPassword = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const res = phoneError(phone, setError);
    const myPhone = `+234${phone.slice(1)}`;
    console.log(phone);
    if (res !== true) {
      setLoading(true);
      try {
        const response = await fetch(
          `${configs.BASE_URL}/api/auth/forgotpassword`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone: myPhone }),
          }
        );

        // const data = axios.post(`${configs.BASE_URL}/api/auth/forgotpassword`, {
        //   phone: phone,
        // });
        const res = await response.json();

        console.log(res);
        dispatch({ type: SET_OTP, payload: res });
        setError((errors) => ({ ...errors, res: "" }));
        navigation.navigate("ResetPasswordScreen", {
          phone: `+234${phone.slice(1)}`,
        });
      } catch (error) {
        setError((errors) => ({ ...errors, res: error.message }));
      }
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      {error.res && <ErrorDiv error={error} setError={setError} />}
      <View style={styles.view}>
        <Logo />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeadingText style={{}}>Phone number</HeadingText>
          <BodyTextLight
            style={{
              textAlign: "center",
              paddingHorizontal: 35,
              marginTop: 20,
            }}
          >
            We'll send you a One Time Password to confirm it's you.
          </BodyTextLight>
        </View>
        <View>
          <InputDiv
            placeholder={"09061235678"}
            value={phone}
            name={"phone"}
            onChangeText={setPhone}
            error={error.phone}
            keyboardType="numeric"
          />
        </View>

        <View>
          <ButtonDiv error={error.res} loading={loading} onPress={handleSubmit}>
            Reset
          </ButtonDiv>
        </View>

        <ForwardForever />
      </View>
    </Wrapper>
  );
};

export default RecoverPassword;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    paddingVertical: 20,
  },
});
