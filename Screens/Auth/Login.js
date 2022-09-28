import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
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
import { login } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { loginError } from "./error";

const Login = ({ navigation }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const res = loginError(details, setError);

    if (res !== true) {
      try {
      } catch (error) {}
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.view}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Logo />
          <HeadingText>Welcome Back</HeadingText>
          <BoldText>Benjamin</BoldText>
        </View>
        <View>
          <InputDiv
            // title={"Username or Email"}
            placeholder={"Username or Email"}
            value={details.email}
            name="email"
            onChangeText={(email) =>
              setDetails((details) => ({ ...details, email }))
            }
            error={error.email}
            keyboardType="default"
          />
          <PasswordInputDiv
            // title={"Password"}
            placeholder={"Password"}
            value={details.password}
            name="password"
            onChangeText={(password) =>
              setDetails((details) => ({ ...details, password }))
            }
            error={error.password}
            keyboardType="password"
          />
        </View>
        <View>
          <ButtonDiv onPress={handleSubmit}>Login</ButtonDiv>
        </View>
        <View style={{ flexDirection: "row" }}>
          <BodyTextBold style={{ opacity: 0.8 }}>First time here?</BodyTextBold>
          <LinkText
            onPress={() => navigation.navigate("SignupScreen")}
            style={{ color: "#008325", paddingLeft: 5 }}
          >
            Sign up
          </LinkText>
        </View>

        <ForwardForever />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
    marginTop: 60,
  },
});
