import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import InputDiv from "../../components/forms/InputDiv";
import BodyTextLight from "../../components/general/BodyTextLight";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import Logo from "../../components/images/Logo";
import { phoneError } from "./error";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/actions/auth";
import Wrapper from "../../components/general/Wrapper";

const RecoverPassword = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const res = phoneError(phone, setError);

    if (res !== true) {
      setLoading(true);
      try {
        await dispatch(forgotPassword(phone));
        navigation.navigate("ResetPasswordScreen");
      } catch (error) {
        setError((errors) => ({ ...errors, res: error.message }));
      }
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <View style={styles.view}>
        <Logo />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeadingText style={{ fontSize: 18 }}>Phone number</HeadingText>
          <BodyTextLight
            style={{
              textAlign: "center",
              paddingHorizontal: 35,
              marginTop: 20,
            }}
          >
            We'll send you a one time otp to confirm it's you.
          </BodyTextLight>
        </View>
        <View>
          <InputDiv
            placeholder={"Phone Number"}
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
