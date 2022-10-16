import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import InputDiv from "../../components/forms/InputDiv";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import Logo from "../../components/images/Logo";
import { emailAndPhoneError } from "./error";
import { useDispatch } from "react-redux";
import { verifyEmailAndPhone } from "../../redux/actions/auth";
import EmailSvg from "../../svg/EmailSvg";
import BodyTextLight from "../../components/general/BodyTextLight";
import Wrapper from "../../components/general/Wrapper";

const EmailAndPhone = ({ navigation }) => {
  const [details, setDetails] = useState({
    phone: "",
    email: "",
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const res = emailAndPhoneError(details, setError);

    if (res !== true) {
      setLoading(true);
      try {
        setError((errors) => ({ ...errors, res: "" }));
        await dispatch(verifyEmailAndPhone(details));
        navigation.navigate("OtpScreen");
      } catch (error) {
        setError((errors) => ({ ...errors, res: error.message }));
      }
    }

    setLoading(false);
  };

  return (
    <Wrapper>
      <View style={styles.view}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <EmailSvg />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeadingText style={{ fontSize: 18, textAlign: "center" }}>
            Please enter your email and phone number
          </HeadingText>
          <BodyTextLight
            style={{ textAlign: "center", opacity: 0.8, paddingHorizontal: 10 }}
          >
            Please an active phone number would be great, so we can send you
            valuable notifications when neccessary
          </BodyTextLight>
        </View>
        <View>
          <InputDiv
            placeholder={"Phone Number"}
            value={details.phone || ""}
            name={"phone"}
            onChangeText={(phone) =>
              setDetails((details) => ({ ...details, phone }))
            }
            error={error.phone}
            keyboardType="numeric"
          />
          <InputDiv
            // title={"Last Name"}
            placeholder={"Email"}
            value={details.email || ""}
            name={"email"}
            onChangeText={(email) =>
              setDetails((details) => ({ ...details, email }))
            }
            error={error.email}
            keyboardType="email"
          />
        </View>

        <View>
          <ButtonDiv error={error.res} onPress={handleSubmit} loading={loading}>
            Next
          </ButtonDiv>
        </View>

        <ForwardForever />
      </View>
    </Wrapper>
  );
};

export default EmailAndPhone;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    paddingVertical: 20,
  },
});
