import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import InputDiv from "../../components/forms/InputDiv";
import PasswordInputDiv from "../../components/forms/PasswordInputDiv";
import BodyTextBold from "../../components/general/BodyTextBold";
import BodyTextLight from "../../components/general/BodyTextLight";
import BoldText from "../../components/general/BoldText";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import LinkText from "../../components/general/LinkText";
import Logo from "../../components/images/Logo";
import { emailAndPhoneError } from "./error";

import { useDispatch } from "react-redux";
import { setEmailAndPhone } from "../../redux/actions/auth";

const EmailAndPhone = ({ navigation }) => {
  const [details, setDetails] = useState({
    phone: "",
    email: "",
  });
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const res = emailAndPhoneError(details, setError);

    if (res !== true) {
      dispatch(setEmailAndPhone(details));
      navigation.navigate("OtpScreen");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.view}>
        <Logo />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeadingText style={{ fontSize: 18 }}>
            What's your email and phone number
          </HeadingText>
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
          <ButtonDiv onPress={handleSubmit}>Next</ButtonDiv>
        </View>

        <ForwardForever />
      </View>
    </SafeAreaView>
  );
};

export default EmailAndPhone;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
    marginTop: Dimensions.get("window").height / 7,
  },
});
