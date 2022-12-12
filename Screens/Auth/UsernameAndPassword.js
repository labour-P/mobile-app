import React, { useState } from "react";
import { View, Dimensions, StyleSheet, Image, Linking } from "react-native";
import InputDiv from "../../components/forms/InputDiv";
import PasswordInputDiv from "../../components/forms/PasswordInputDiv";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import LinkText from "../../components/general/LinkText";
import Logo from "../../components/images/Logo";
import { signup } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { signUpError } from "./error";
import SignupSvg from "../../svg/SignupSvg";
import Wrapper from "../../components/general/Wrapper";
import BodyTextLight from "../../components/general/BodyTextLight";
import { colors } from "../../constants/color";

const UsernameAndPassword = ({ navigation }) => {
  const [details, setDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const {
    name,
    email,
    phone,
    state,
    ward,
    lga,
    polling_unit,
    age,
    profileImage,
  } = useSelector((state) => state.auth);

  const checkUsername = async (username) => {
    setDetails((details) => ({ ...details, username }));
  };

  const handleSignup = async () => {
    const res = signUpError(details, setError);
    if (res !== true) {
      const data = {
        name,
        email,
        phone,
        state,
        ward,
        lga,
        pollingUnit: polling_unit,
        age,
        address: "my address",
        city: "my city",
        userName: details.username,
        password: details.password,
        profileUrl: profileImage,
      };

      setLoading(true);
      try {
        await dispatch(signup(data));
        setError((errors) => ({ ...errors, res: "" }));
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
          <Image
            style={{ width: 150, height: 120 }}
            source={require("./../../assets/img/labour-signup.png")}
            resizeMode="contain"
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <HeadingText style={{ paddingHorizontal: 20, textAlign: "center" }}>
            Please choose a username & password
          </HeadingText>
        </View>
        <View>
          <InputDiv
            placeholder={"Username"}
            value={details.username}
            onChangeText={(username) => checkUsername(username)}
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

        <View style={{ marginTop: 20 }}>
          <ButtonDiv error={error.res} loading={loading} onPress={handleSignup}>
            Submit
          </ButtonDiv>
        </View>

        <ForwardForever />
      </View>
    </Wrapper>
  );
};

export default UsernameAndPassword;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
    height: Dimensions.get("window").height,
  },
  align: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 40,
  },
});
