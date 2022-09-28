import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import InputDiv from "../../components/forms/InputDiv";
import PasswordInputDiv from "../../components/forms/PasswordInputDiv";
import BodyTextLight from "../../components/general/BodyTextLight";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import LinkText from "../../components/general/LinkText";
import Logo from "../../components/images/Logo";
import { login } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { signUpError } from "./error";

const UsernameAndPassword = ({ navigation }) => {
  const [details, setDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSignup = async () => {
    const res = signUpError(details, setError);

    if (res !== true) {
      await dispatch(login());
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.view}>
        <Logo />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <HeadingText style={{ fontSize: 18 }}>
            Choose a username and password
          </HeadingText>
        </View>
        <View>
          <InputDiv
            placeholder={"Username"}
            value={details.username}
            onChangeText={(username) =>
              setDetails((details) => ({ ...details, username }))
            }
            name="username"
            error={error.username}
            keyboardType="default"
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
          <LinkText
            onPress={() => navigation.navigate("SignupScreen")}
            style={{ color: "#008325", paddingLeft: 5 }}
          >
            I agree to the terms of service provacy policy
          </LinkText>
        </View>
        <View>
          <ButtonDiv onPress={handleSignup}>Submit</ButtonDiv>
        </View>

        <ForwardForever />
      </View>
    </SafeAreaView>
  );
};

export default UsernameAndPassword;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
    marginTop: 60,
  },
});
